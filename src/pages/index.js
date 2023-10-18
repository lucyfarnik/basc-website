import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.heroBody)}>
          We are BASC, a research organization dedicated to preventing existential
          risks and steering the future of AGI towards positive outcomes for
          humanity. We focus on interpretability and AI policy research.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/about">
            Read more about us
          </Link>
        </div>
      </div>
    </div>
  );
}

const InterpInfo = () => (
  <div className={clsx(styles.section, styles.interp)}>
    <div className={clsx('container', styles.sectionContainer, styles.interpContainer)}>
      <div className={styles.textHalf}>
        <h2>Interpretability research</h2>
        <p>
          Modern AI systems are "black boxes" — it's impossible to understand why
          they make the decisions they do. This is makes it difficult to evaluate
          safety properties of these systems, which in turn makes it difficult to
          design effective regulations around them. We are working on changing that.
        </p>
      </div>
      <div className={styles.imageHalf}>
        <img src="/img/interp.png" alt="Interpretability" />
      </div>
    </div>
  </div>
);

const PolicyInfo = () => (
  <div className={clsx(styles.section, styles.policy)}>
    <div className={clsx('container', styles.sectionContainer, styles.policyContainer)}>
      <div className={styles.imageHalf}>
        <img src="/img/policy.png" alt="AI Policy" />
      </div>
      <div className={styles.textHalf}>
        <h2>AI Policy research</h2>
        <p>
          There is still plenty of low-hanging fruit in the realm of AI policy.
          What does effective regulation aimed at reducing existential risks from
          AGI even look like? Our policy research aims to shed light at this question.
        </p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="BASC is a small research group working on AGI safety, interpretability, and policy.">
      <main>
        <HeroHeader />
        <InterpInfo />
        <PolicyInfo />
      </main>
    </Layout>
  );
}
