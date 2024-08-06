import Image from "next/image";
import styles from "./page.module.css";
import { SectionList } from "@/components/ui/SectionList";


export default function Home() {
  return (
    <div className={styles.content}>
      <SectionList subTitle='Popular' category={'popular'} />
      <SectionList subTitle='Now Playing' category={'now_playing'} />
      <SectionList subTitle='Upcoming' category={'upcoming'} />
      <SectionList subTitle='Top Rated' category={'top_rated'} />
    </div>
  );
}
