import Image from "next/image"
import styles from "./header.module.css";
import image from '/public/images/Logo.png'
import Link from "next/link";
import { ButtonTheme } from "../ui/ButtonTheme";


const MENU = [
  { path: 'popular', text: 'popular' },
  { path: 'now_playing', text: 'now playing' },
  { path: 'upcoming', text: 'upcoming' },
  { path: 'top_rated', text: 'top rated' },
  { path: 'favorites', text: 'favorites' },
  { path: 'saved', text: 'saved' },
]

export const Header = () => {
  return (
    <nav className={styles.header}>
      <a href="/" className={styles.logo} >
        <Image src={image} alt="" className='' />
      </a>
      <section className={styles.menu}>
        <ul>
          {MENU.map(({ path, text }) => (
            <li key={text}>
              <Link href={path} >{text}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.actions}>
        <ButtonTheme />
        <i className="icon icon-login"></i>
      </section>
    </nav>
  )
}
