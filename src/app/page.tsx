import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Banner/>
        <CardPanel/>
      </main>
    </div>
  );
}
