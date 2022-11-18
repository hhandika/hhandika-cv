import Container from "../common/components/container";
import Navbar from "../common/components/navbar";
import styles from "../styles/Home.module.css";

export default function AboutMe() {
  return (
    <div>
      <Container />
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>
          <h3>
            I study small mammals in Southeast Asia. My research focus on
            documenting species diversity, understanding patterns of species
            distribution
          </h3>
        </div>
      </main>
    </div>
  );
}
