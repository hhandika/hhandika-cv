import Head from "next/head";
import Image from "next/image";
import Container from "../common/components/container";
import Navbar from "../common/components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Container />
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <h3 className={styles.title}>Hi,</h3>
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
