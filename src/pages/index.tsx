import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useColorMode} from '@docusaurus/theme-common';

import {
  BlurText,
  CountUp,
  DecryptedText,
  DotField,
  ShinyText,
  SpotlightCard,
  StarBorder,
} from '@site/src/components/reactbits';

import styles from './index.module.css';

/* ------------------------------------------------------------------ data */

const STATS = [
  {to: 31, suffix: '', label: 'public repos'},
  {to: 11, suffix: 'yrs', label: 'writing code'},
  {to: 2, suffix: 'nd', label: 'eag buildathon'},
  {to: 38, suffix: '', label: 'github followers'},
];

const PROJECTS = [
  {
    index: '01',
    name: 'AyudaEnCali',
    kind: 'community emergency platform',
    date: 'sep 27 → oct 2, 2026',
    description:
      'an interactive map + needs board + an AI assistant for santiago de cali. find shelters, vets, collection points and health centers in real time, post what your block needs, and let CaliSolidaria IA answer on top of real data. supabase → memory cache → localStorage, so the screen never goes blank.',
    stack: [
      'react 19',
      'typescript',
      'vite',
      'tailwind 4',
      'leaflet',
      'supabase',
      'clerk',
      'gemini',
      'vercel',
    ],
    links: [
      {label: 'live ↗', href: 'https://www.ayudaencali.lat'},
      {label: 'code ↗', href: 'https://github.com/Sherikxd/AyudaEnCali'},
    ],
  },
  {
    index: '02',
    name: 'NatureIntelligence',
    kind: 'forest fire detection platform',
    date: 'sep 25 → 26, 2026',
    description:
      'early fire detection for cali and the valle del cauca. nasa firms/viirs + noaa goes-16 telemetry, iot stations on the hills, thermal cameras and an ai engine that throws away false positives. alerts fly over sse + websockets, and there is a rothermel spread simulator to play with.',
    stack: [
      'typescript',
      'node',
      'sse',
      'websockets',
      'iot · esp32',
      'nasa firms',
      'vitest',
      'docker',
    ],
    links: [
      {label: 'live ↗', href: 'https://deteccion-incendio-hackathon.vercel.app'},
      {label: 'code ↗', href: 'https://github.com/Sherikxd/deteccion-incendio-hackathon'},
    ],
  },
  {
    index: '03',
    name: 'Áureo',
    kind: 'ethereum middleware · open source',
    date: 'sep 19, 2026',
    description:
      'middleware that watches corporate transfers registered on chain and scores them live with deterministic speed + volume rules. it returns a risk verdict (high / medium / low) over cli, api and websocket, with auditable evidence behind it. ships a reusable @aureo/sdk for other dapps.',
    stack: [
      'solidity',
      'hardhat',
      'node',
      'ethers',
      'websocket',
      'sdk + cli',
      'openrouter / groq',
      'docker',
    ],
    links: [
      {label: 'code ↗', href: 'https://github.com/Sherikxd/aureo'},
      {label: 'devfolio ↗', href: 'https://devfolio.co/projects/aureo-f338'},
    ],
  },
];

const FACTS = [
  {key: 'based in', value: 'cali, colombia'},
  {key: 'age', value: '18'},
  {key: 'coding since', value: '7 years old'},
  {key: 'right now', value: 'maintaining ayudaencali + aureo'},
  {key: 'open to', value: 'new projects — just email me'},
  {key: 'learning', value: 'pytorch + react native'},
  {key: 'daily driver', value: 'linux'},
  {key: 'ask me about', value: 'c/c++, php, python, node'},
  {
    key: 'into',
    value: 'data science · cloud infra · automation · system design',
  },
  {
    key: 'newest rabbit hole',
    value: 'agent economies inside blockchain',
  },
  {key: 'orgs', value: 'unifay · watermelon · bludi · music-code'},
];

const STACK = [
  {
    title: 'languages',
    items: [
      'typescript',
      'javascript',
      'python',
      'c / c++',
      'php',
      'java',
      'sql',
    ],
  },
  {
    title: 'frontend',
    items: [
      'react 19',
      'vite',
      'tailwind css',
      'leaflet',
      'react native',
      'html / css',
    ],
  },
  {
    title: 'backend & data',
    items: [
      'node + express',
      'nestjs',
      'flask / django',
      'postgresql',
      'mongodb',
      'redis',
    ],
  },
  {
    title: 'ai & web3',
    items: [
      'pytorch',
      'tensorflow',
      'gemini / llms',
      'solidity',
      'hardhat',
      'ethers',
    ],
  },
  {
    title: 'infra',
    items: ['linux', 'docker', 'github actions', 'aws / gcp / azure', 'nginx'],
  },
];

// latest posts, kept in sync with the files in /blog (urls include the date)
const POSTS = [
  {
    date: 'oct 1, 2026',
    title: 'ayudaencali: a map that refuses to break',
    href: '/blog/2026/10/01/ayudaencali-offline-first',
  },
  {
    date: 'sep 26, 2026',
    title: 'trying to catch fires before they spread',
    href: '/blog/2026/09/26/fire-detection-in-48-hours',
  },
  {
    date: 'sep 22, 2026',
    title: '2nd place at the eag global buildathon',
    href: '/blog/2026/09/22/second-place-eag-global-buildathon',
  },
];

const SOCIALS = [
  {label: 'github', href: 'https://github.com/Sherikxd'},
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/andrei-sherikhov-3a06582a7/',
  },
  {label: 'dev.to', href: 'https://dev.to/sherikxd'},
  {label: 'ethcali winners', href: 'https://www.ethcali.org/builders-tour/winners'},
];

/* -------------------------------------------------------------- sections */

function SectionHead({
  index,
  title,
  right,
  id,
}: {
  index: string;
  title: string;
  right?: ReactNode;
  id?: string;
}) {
  return (
    <div className={styles.sectionHead}>
      <Heading as="h2" id={id} className={styles.sectionTitle}>
        {title}
      </Heading>
      <span className={styles.sectionIndex}>{right ?? index}</span>
    </div>
  );
}

function Hero() {
  const {colorMode} = useColorMode();
  const dark = colorMode === 'dark';

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true">
        <DotField
          dotRadius={1.25}
          dotSpacing={16}
          cursorRadius={360}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={32}
          glowRadius={190}
          glowColor={dark ? '#000000' : '#ffffff'}
          gradientFrom={dark ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.30)'}
          gradientTo={dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)'}
        />
      </div>

      <div className={clsx('container', styles.heroInner)}>
        <span className={styles.eyebrow}>
          <i className={styles.dot} /> available for work · cali, colombia
        </span>

        <Heading as="h1" className={styles.name}>
          andrei sherikhov
        </Heading>

        <span className={styles.handle}>
          <DecryptedText
            text="@sherikxd"
            animateOn="hover"
            speed={40}
            maxIterations={6}
            characters="abcdefghijklmnopqrstuvwxyz0123456789@#"
          />
        </span>

        <BlurText
          className={styles.lede}
          text="i'm 18 and i've been writing code since i was 7. mostly web, ai and ethereum stuff — i like projects that still work when the network, the database or my patience dies."
          delay={90}
          animateBy="words"
          direction="top"
        />

        <div className={styles.actions}>
          <StarBorder
            as={Link}
            to="/#work"
            color="var(--bb-fg)"
            thickness={1}
            backgroundColor="var(--bb-fg)"
            textColor="var(--bb-bg)"
            borderColor="var(--bb-fg)"
          >
            see my work
          </StarBorder>
          <Link className={styles.ghost} to="/blog">
            read the blog →
          </Link>
        </div>

        <div className={styles.stats}>
          {STATS.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <div className={styles.statValue}>
                <CountUp to={stat.to} duration={1.6} />
                <span className={styles.statSuffix}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const {colorMode} = useColorMode();
  const dark = colorMode === 'dark';

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead index="(01) about" title="hi, i'm andrei" />
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <p>
              i started coding when i was 7 — first as a kid breaking things on
              purpose, then as someone who actually ships. today i'm 18, i live
              in colombia and i spend most of my time between typescript,
              python and solidity.
            </p>
            <p>
              right now my attention is on keeping <strong>ayudaencali</strong>{' '}
              and <strong>aureo</strong> alive and improving, plus learning
              pytorch and react native, and hanging around groups like unifay,
              watermelon community, bludi development, music-code and snow
              network.
            </p>
            <p>
              the stuff that keeps me up at night: data science, cloud
              infrastructure, automation and system design — basically
              anything where you have to think how the pieces fit before you
              write a line.
            </p>
            <p>
              honestly i care about one thing:{' '}
              <strong>does it work when things go wrong?</strong> bad network,
              no database, a service down at 2am. that is why half of my
              projects have fallbacks behind their fallbacks.
            </p>
            <p>
              <strong>newest obsession:</strong> agent economies inside
              blockchain. teams of ai agents that actually own wallets, pay
              each other for work and settle it on chain. no idea where it
              goes, but i'm building something around it.
            </p>
            <p>
              that said, i'm totally open to join other projects — if you have
              an idea (or a job) you think i'd enjoy, write me at{' '}
              <a href="mailto:sherikdev@gmail.com">sherikdev@gmail.com</a> and
              let's talk.
            </p>
            <p>
              <ShinyText
                text="also: linux enjoyer, chronic side-project starter, always up to build something weird."
                speed={3}
                color={dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)'}
                shineColor={dark ? '#ffffff' : '#000000'}
              />
            </p>
          </div>

          <div className={styles.facts}>
            {FACTS.map((fact) => (
              <div className={styles.fact} key={fact.key}>
                <span className={styles.factKey}>{fact.key}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          index="(02) latest work"
          title="3 repos, newest first"
          right="31 repos on github"
          id="work"
        />

        <div className={styles.grid3}>
          {PROJECTS.map((project) => (
            <SpotlightCard key={project.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span>{project.index}</span>
                <span>{project.date}</span>
              </div>

              <Heading as="h3" className={styles.cardTitle}>
                {project.name}
              </Heading>
              <span className={styles.cardSub}>{project.kind}</span>

              <p className={styles.cardDesc}>{project.description}</p>

              <div className={styles.chips}>
                {project.stack.map((tech) => (
                  <span className={styles.chip} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                {project.links.map((link) => (
                  <a
                    className={styles.cardLink}
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          index="(03) recent win"
          title="the hackathon thing"
          id="achievements"
        />

        <div className={styles.win}>
          <div>
            <span className={styles.winRankLabel}>place</span>
            <p className={styles.winRank}>2nd</p>
          </div>

          <div>
            <Heading as="h3" className={styles.winTitle}>
              eag global buildathon · cali
            </Heading>
            <p className={styles.winText}>
              2nd place with <strong>Áureo</strong>, my open-source ethereum
              middleware, in the application middleware &amp; open-source
              tooling track. more than 25 hackers and 13 projects in under 48
              hours, and the prize was 200 usdt paid on ethereum mainnet.
              honestly still processing it.
            </p>

            <div className={styles.winMeta}>
              <span>20 sep 2026</span>
              <span>auditorio sidoc · universidad icesi</span>
              <span>48 hours</span>
              <span>200 usdt</span>
            </div>

            <div className={styles.winLinks}>
              <a
                className={styles.winLink}
                href="https://www.ethcali.org/builders-tour/winners"
                target="_blank"
                rel="noreferrer"
              >
                official winners ↗
              </a>
              <a
                className={styles.winLink}
                href="https://devfolio.co/projects/aureo-f338"
                target="_blank"
                rel="noreferrer"
              >
                devfolio ↗
              </a>
              <a
                className={styles.winLink}
                href="https://github.com/Sherikxd/aureo"
                target="_blank"
                rel="noreferrer"
              >
                aureo code ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead index="(04) toolbox" title="things i use" />
        <div className={styles.stackGrid}>
          {STACK.map((group) => (
            <div className={styles.stackCol} key={group.title}>
              <p className={styles.stackTitle}>{group.title}</p>
              <ul className={styles.stackList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogTeaser() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          index="(05) blog"
          title="i write stuff too"
          right={<Link to="/blog">all posts →</Link>}
        />
        <div className={styles.blogRow}>
          {POSTS.map((post) => (
            <Link className={styles.blogItem} to={post.href} key={post.href}>
              <span className={styles.blogDate}>{post.date}</span>
              <span className={styles.blogTitle}>{post.title}</span>
              <span className={styles.blogRead}>read →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className={clsx(styles.section, styles.contact)} id="contact">
      <div className="container">
        <SectionHead index="(06) contact" title="say hi" />
        <a className={styles.mail} href="mailto:sherikdev@gmail.com">
          sherikdev@gmail.com
        </a>

        <p className={styles.contactNote}>
          right now i'm keeping ayudaencali and aureo going, but i'm open to
          other projects too — freelance, a team, a weird idea, whatever. if
          it sounds fun, send me a message and we'll see.
        </p>

        <div className={styles.socials}>
          {SOCIALS.map((social) => (
            <a
              className={styles.social}
              href={social.href}
              key={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label} ↗
            </a>
          ))}
        </div>  
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ page */

export default function Home(): ReactNode {
  return (
    <Layout
      title="18 y/o dev from colombia"
      description="Portfolio of Andrei Sherikhov (Sherikxd) — 18 y/o self-taught dev from Colombia, coding since he was 7. AyudaEnCali, AI fire detection and Áureo (2nd, EAG Buildathon)."
    >
      <main>
        <Hero />
        <About />
        <Work />
        <Achievements />
        <Stack />
        <BlogTeaser />
        <Contact />
      </main>
    </Layout>
  );
}
