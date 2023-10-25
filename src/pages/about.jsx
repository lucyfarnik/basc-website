import React from 'react';
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

function TeamMember({ name, photo, email, bio }) {
  return (
    <div className={styles.teamMember} id={name.split(' ')[0].toLowerCase()}>
      <h3>{name}</h3>
      <img src={photo} alt={name} />
      <p>{bio}</p>
      <p className={styles.email}>Contact: {email}</p>
    </div>
  );
}

const teamInfo = [
  {
    name: 'Aidan Ewart',
    photo: AidanImage,
    email: 'aidanprattewart (at) gmail.com',
    bio: `Aidan is researching technical AI alignment, with a particular emphasis
      on ML interpretability and robustly safe AI to AGI. They are currently pursuing
      a degree in Mathematics at the University of Bristol, and have collaborated
      with researchers from Apollo Research and EleutherAI. A recent research project
      of theirs was cited by the Anthropic interpretability team.`,
  },
  {
    name: 'Lucy Farnik',
    photo: LucyImage,
    email: 'lucyfarnik (at) gmail.com',
    bio: `Lucy started coding at age 7 and became a senior developer at a
      tech startup at age 18. She's since switched to AI safety research, and has
      collaborated on her work with researchers from FHI, CHAI, and FAR AI.
      She's also done ARENA and AISC. She's currently a PhD student at the
      University of Bristol researching AI interpretability.`,
  },
  {
    name: 'Gaurav Yadav',
    photo: GauravImage,
    email: 'rz21873 (at) bristol.ac.uk',
    bio: `Gaurav is diving into the world of AI regulation while pursuing a Law
      Degree at the University of Bristol. Before this, they interned at the Centre
      for Effective Altruism. Right now, they’re digging deep into a final year
      project that explores how laws and computing power can better govern AI.
      Gaurav is also keenly interested in AI policies, both in China and globally.`,
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
  return (
    <Layout
      title="About us"
      description="BASC is a small research group working on AGI safety, interpretability, and policy."
    >
      <AboutHeader />
      <Team />
    </Layout>
  );
}
