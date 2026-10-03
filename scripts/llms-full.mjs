/**
 * Builds build/llms-full.txt — the plain-text version of the whole site, for
 * ai assistants that want the full content instead of short summaries.
 *
 * Runs automatically after `npm run build` (see the postbuild script).
 */
import {readFileSync, readdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = path.join(root, 'blog');
const outDir = path.join(root, 'build');
const siteUrl = 'https://sherikxd.github.io';

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return {frontMatter: {}, body: raw};
  }
  const frontMatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/i);
    if (!kv) {
      continue;
    }
    let value = kv[2].trim();
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1);
    }
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    }
    frontMatter[kv[1]] = value;
  }
  return {frontMatter, body: raw.slice(match[0].length)};
}

function toPlainText(body) {
  return (
    body
      // mdx comments, including the {/* truncate */} marker
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
      // fenced code blocks: keep the code, drop the fences
      .replace(/```[a-z]*\r?\n/g, '')
      .replace(/```/g, '')
      // images become their alt text, links become "text (url)"
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '$1 ($2)')
      // emphasis markers
      .replace(/(\*\*|__|\*|_)/g, '')
      // horizontal rules
      .replace(/^\s*(-{3,}|\*{3,})\s*$/gm, '')
      .replace(/\r?\n{3,}/g, '\n\n')
      .trim()
  );
}

const posts = readdirSync(blogDir)
  .filter((file) => file.endsWith('.mdx'))
  .sort((a, b) => b.localeCompare(a)) // filenames start with the date
  .map((file) => {
    const {frontMatter, body} = parseFrontMatter(
      readFileSync(path.join(blogDir, file), 'utf8'),
    );
    const date = file.match(/^(\d{4}-\d{2}-\d{2})/)?.[1];
    return {
      title: frontMatter.title ?? file,
      description: frontMatter.description ?? '',
      tags: Array.isArray(frontMatter.tags) ? frontMatter.tags : [],
      date,
      permalink: date ? `/blog/${date.replaceAll('-', '/')}/${file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx$/, '')}/` : `/blog/`,
      body: toPlainText(body),
    };
  });

const intro = readFileSync(path.join(root, 'static/llms.txt'), 'utf8').trim();

const out = [
  '# Full content of https://sherikxd.github.io',
  '',
  '> Everything on this site in plain text: the portfolio summary, the',
  '> projects and every blog post in full. Maintained automatically by',
  '> scripts/llms-full.mjs.',
  '',
  '## Portfolio',
  '',
  intro,
  '',
  '---',
  '',
  '## Blog posts (full text)',
  '',
  ...posts.flatMap((post) => [
    `### ${post.title}`,
    '',
    `url: ${siteUrl}${post.permalink}`,
    `published: ${post.date}`,
    post.description ? `description: ${post.description}` : '',
    post.tags.length ? `tags: ${post.tags.join(', ')}` : '',
    '',
    post.body,
    '',
    '---',
    '',
  ]),
];

writeFileSync(path.join(outDir, 'llms-full.txt'), out.join('\n'));
console.log(`llms-full.txt written (${posts.length} posts)`);
