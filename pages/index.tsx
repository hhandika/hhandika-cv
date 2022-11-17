import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Heru Handika | I Study Non-Charismatic Mammals</title>
        <meta
          name="description"
          content="I study small mammals in Southeast Asia. My research focus on documenting species diversity, understanding patterns of species distribution
  across space and time, and species adaptation to novel environment."
        />
        <meta
          name="keywords"
          content="species, biodiversity, evolution, adaptation, novel environment, biology, Southeast Asia"
        />
        <meta name="author" content="Heru Handika" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicon-16x16.png"
        />
        <link rel="manifest" href="icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="icons/safari-pinned-tab.svg"
          color="#37a672"
        />
        <link rel="shortcut icon" href="icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#37a672" />
        <meta name="msapplication-config" content="icons/browserconfig.xml" />
        // Google Analytics
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi,</h1>

        <p className={styles.description}>
          I am <em>Heru Handika</em>. I am a PhD candidate at{" "}
          <span>
            <a
              title="Esselstyn's lab website"
              target="_blank"
              rel="noopener noreferrer"
              href="https://esselstyn.github.io/"
            >
              Esselstyn's Lab
            </a>
          </span>
          , Louisiana State University, USA. My main research interest is
          centered around understanding how complex topography and geological
          history generate small mammal diversity. We conduct multi-nationality
          collaborative fieldwork on islands in Southeast Asia. Whenever
          relevant, I develop computer programs to improve efficiency in
          conducting our research projects.
        </p>
      </main>

      <footer className={styles.footer}>
        <ul className="text-3xl font-bold underline">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/heru_hdk"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hhandika"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://scholar.google.com/citations?user=Jaub_M0AAAAJ&hl=en"
            >
              GoogleScholar
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/heru_hdka/"
            >
              Instagram
            </a>
          </li>
        </ul>

        <p>
          &copy; 2020-2022
          <a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#104;&#104;&#097;&#110;&#100;&#105;&#049;&#064;&#108;&#115;&#117;&#046;&#101;&#100;&#117;">
            Heru Handika
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
