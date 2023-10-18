import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AidanImage from '@site/static/img/aidan.jpeg';
import LucyImage from '@site/static/img/lucy.jpeg';
import GauravImage from '@site/static/img/gaurav.jpeg';
import styles from './about.module.css';

const AboutHeader = () => (
  <header className={styles.aboutHeader}>
    <div className="container">
      <h1>About us</h1>
      <p>We're a small team of researchers pushing to make the future brighter</p>
    </div>
  </header>
);

const TeamMember = (props) => (
  <div className={styles.teamMember}>
    <h3>{props.name}</h3>
    <img src={props.photo} alt={props.name} />
    <p>{props.bio}</p>
  </div>
);

const team_info = [
  {
      name: 'Aidan Ewart',
      photo: AidanImage,
      bio: 'Haskel, bruh',
  },
  {
      name: 'Lucy Farnik',
      photo: LucyImage,
      bio: `Lucy started coding at age 7 and became a senior developer at a
      tech startup at age 18. She's since switched to AI safety research, and has
      collaborated on her work with researchers from FHI, CHAI, and FAR AI.
      She's also done ARENA and AISC. She's currently a PhD student at the
      University of Bristol researching AI interpretability.`,
  },
  {
      name: 'Gaurav Yadav',
      photo: GauravImage,
      bio: 'Bigly ADHD',
  }
]

const Team = () => (
  <div className={styles.team}>
    <h2>
      Our team
    </h2>
    <div className={styles.teamList}>
      {team_info.map((props) => (
        <TeamMember key={props.name} {...props} />
      ))}
    </div>
  </div>
)

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About us | ${siteConfig.title}`}
      description="BASC is a small research group working on AGI safety, interpretability, and policy.">
      <AboutHeader />
      <Team />
    </Layout>
  );
}
