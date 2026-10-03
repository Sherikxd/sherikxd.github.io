import type {ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItem from '@theme-original/BlogPostItem';
import type {Props} from '@theme/BlogPostItem';

/**
 * Structured data (schema.org BlogPosting) injected only on the single post
 * page, so google can show it as an article and ai crawlers can quote it with
 * the right author, date and canonical url.
 */
function useBlogPostingJsonLd(): string | undefined {
  const {metadata, frontMatter, isBlogPostPage} = useBlogPost();
  const {siteConfig} = useDocusaurusContext();

  if (!isBlogPostPage) {
    return undefined;
  }

  const url = siteConfig.url + metadata.permalink.replace(/\/?$/, '/');
  const keywords = [
    ...(frontMatter.keywords ?? []),
    ...metadata.tags.map((tag) => tag.label),
  ];

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: metadata.title,
    description: metadata.description,
    datePublished: new Date(metadata.date).toISOString(),
    inLanguage: 'en',
    mainEntityOfPage: {'@type': 'WebPage', '@id': url},
    image: `${siteConfig.url}/img/social-card.png`,
    keywords: keywords.join(', '),
    author: {
      '@type': 'Person',
      name: 'Andrei Sherikhov',
      alternateName: 'Sherikxd',
      url: `${siteConfig.url}/`,
      sameAs: [
        'https://github.com/Sherikxd',
        'https://www.linkedin.com/in/andrei-sherikhov-3a06582a7/',
      ],
    },
    publisher: {'@id': `${siteConfig.url}/#person`},
    isAccessibleForFree: true,
  };

  return JSON.stringify(data);
}

export default function BlogPostItemWrapper(props: Props): ReactNode {
  const jsonLd = useBlogPostingJsonLd();

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: jsonLd}}
        />
      )}
      <BlogPostItem {...props} />
    </>
  );
}
