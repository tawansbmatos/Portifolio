import {
  FaBookmark,
  FaCalendar,
  FaEnvelope,
  FaHeart,
  FaRegEnvelope,
  FaSquare,
  FaUsers,
} from "react-icons/fa";
import styles from "../sidebarLeft/sidebarLeft.module.css";
import Image from "next/image";
import { Fa42Group } from "react-icons/fa6";

export default function SidebarLeft() {
  return (
    <div className={styles.containerall}>
      <aside className={styles.sidebarLeft}>
        <section className={styles.secprofile}>
          <Image
            className={styles.avatar}
            src="/1756348824918.png"
            alt="imagem de perfil"
            width={60}
            height={60}
          />
        </section>

        <section className={styles.descriptions}>
          <h2>Tawan S. B. Matos</h2>
          <p>Front-End | Full Stack Developer</p>
          <p>Desenvolvimento web | Next.Js</p>
          <span className={styles.splocation}>Belém, Pará</span>
          <div className={styles.boximgfac}>
            <Image
              className={styles.iconefac}
              src="/faculdade_faci_logo.jpeg"
              alt="imagem de icone"
              width={30}
              height={30}
            />
            <span className={styles.spfac}>Faculdade FACI WYDEN</span>
          </div>
        </section>
      </aside>
      <section className={styles.boxconect2}>
        <div className={styles.boxtxtconect}>
          <p>Conexões</p>
          <li>
            <a href="#">10</a>
          </li>
        </div>
        <span>Amplie sua rede</span>
      </section>
      <section className={styles.box3}>
        <p>Consiga emprego 2,6x mais rápido com o Premium</p>
        <div className={styles.box3txt}>
          <li>
            <a href="#">
              <FaSquare size={18} color="gold" /> Experimente por BRL0
            </a>
          </li>
        </div>
      </section>
      <section className={styles.box4}>
        <div className={styles.linksbox4}>
          <div className={styles.contentbox4}>
            <FaBookmark className={styles.icons} />
            <a href="#">Itens salvos</a>
          </div>
          <div className={styles.contentbox4}>
            <FaUsers className={styles.icons} />
            <a href="#">Grupos</a>
          </div>
          <div className={styles.contentbox4}>
            <FaEnvelope className={styles.icons} />
            <a href="#">Newslatters</a>
          </div>
          <div className={styles.contentbox4}>
            <FaCalendar className={styles.icons} />
            <a href="#">Eventos</a>
          </div>
        </div>
      </section>
    </div>
  );
}
