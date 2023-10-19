import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AidanImage from '@site/static/img/aidan.jpeg';
import LucyImage from '@site/static/img/lucy.jpeg';
import GauravImage from '@site/static/img/gaurav.jpeg';
import styles from './about.module.css';

function AboutHeader() {
  return (
    <header className={styles.aboutHeader}>
      <div className="container">
        <h1>About us</h1>
        <p>We're a small team of researchers pushing to make the future brighter</p>
      </div>
    </header>
  );
}

function TeamMember({ name, photo, bio }) {
  return (
    <div className={styles.teamMember}>
      <h3>{name}</h3>
      <img src={photo} alt={name} />
      <p>{bio}</p>
    </div>
  );
}

const teamInfo = [
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
  },
];

function Team() {
  return (
    <div className={styles.team}>
      <h2>
        Our team
      </h2>
      <div className={styles.teamList}>
        {teamInfo.map((teamMember) => (
          <TeamMember key={teamMember.name} {...teamMember} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About us | ${siteConfig.title}`}
      description="BASC is a small research group working on AGI safety, interpretability, and policy."
    >
      <AboutHeader />
      <Team />
    </Layout>
  );
}
