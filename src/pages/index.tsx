import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Translate from '@docusaurus/Translate'
import Link from '@docusaurus/Link'
import Head from '@docusaurus/Head'
import styles from './index.module.css'
import clsx from 'clsx'
import { Globe } from '../components/Globe'
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function Home(): JSX.Element {
  const { siteConfig, i18n } = useDocusaurusContext()
  const { currentLocale } = i18n
  const todayLink = currentLocale === 'en' ? `/today/` : `/${currentLocale}/today/`
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <Head>
        {i18n.locales.map((locale) => (
          <link
            key={`rss-story-${locale}`}
            rel="alternate"
            type="application/rss+xml"
            title={`Heimdall RSS - Story (${locale})`}
            href={`https://hn.cho.sh/rss/story/${locale}.xml`}
          />
        ))}
        {i18n.locales.map((locale) => (
          <link
            key={`rss-newsletter-${locale}`}
            rel="alternate"
            type="application/rss+xml"
            title={`Heimdall RSS - Newsletter (${locale})`}
            href={`https://hn.cho.sh/rss/newsletter/${locale}.xml`}
          />
        ))}
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroElement}>
            <h1>
              <Translate>Heimdall: Hacker News Summary</Translate>
            </h1>

            <ul className={styles.features}>
              <li className={clsx(styles.bullet, styles.firstBullet)}>
                <Translate>Summarizes Silicon Valley News in 30 Languages.</Translate>
              </li>
              <li className={clsx(styles.bullet, styles.secondBullet)}>
                <Translate>Already Loved by Professionals at Apple, Microsoft, etc.</Translate>
              </li>
              <li className={clsx(styles.bullet, styles.thirdBullet)}>
                <Translate>Completely Free.</Translate>
              </li>
            </ul>
            <div className={styles.buttons}>
              <Link to="/subscribe" className={clsx('button button--primary button--lg', styles.subscribeButton)}>
                <Translate>Subscribe</Translate>
              </Link>
              {/* Link doesn't work for docusaurus redirects */}
              <a href={todayLink} className={clsx('button button--secondary button--lg', styles.readFirstButton)}>
                <Translate>Read First</Translate>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.background}>
          <BrowserOnly>{() => <Globe />}</BrowserOnly>
        </div>
      </main>
    </Layout>
  )
}
