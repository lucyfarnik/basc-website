import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AidanImage from '@site/static/img/aidan.png';
import LucyImage from '@site/static/img/lucy.png';
import GauravImage from '@site/static/img/gaurav.png';

import styles from './index.module.css';

function AboutHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">About us</h1>
        <p className="hero__subtitle">We do cool shit</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function TeamMember(props) {
    return (
      <div className='w-64'>
        <h3 className='text-center'>{props.name}</h3>
        <img
            src={props.photo}
            alt={props.name}
            className='w-32 h-32 object-cover mx-auto'
        />
        <p>{props.bio}</p>
      </div>
    );
}

const team_info = [
    {
        name: 'Aidan Ewart',
        photo: AidanImage,
        bio: 'Haskel, bruh',
    },
    {
        name: 'Lucy Farnik',
        photo: LucyImage,
        bio: 'I make computer go brr haha',
    },
    {
        name: 'Gaurav Yadav',
        photo: GauravImage,
        bio: 'Bigly ADHD',
    }
]

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <AboutHeader />
      <div className="flex flex-row justify-evenly">
        {team_info.map((props) => (
          <TeamMember key={props.name} {...props} />
        ))}
      </div>

    </Layout>
  );
}
