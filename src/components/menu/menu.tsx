import styles from "../menu/menu.module.css";
import {
  FaBell,
  FaBriefcase,
  FaCaretDown,
  FaCommentDots,
  FaHome,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import Image from "next/image";
import Btntema from "../btntema/btntema";

export default function TopMenu() {
  return (
    <header className={styles.header}>
      <div className={styles.boxNav}>
        <div className={styles.logo}>LinkedDev</div>
        <div className={styles.boxinputHeader}>
          <FaSearch size={17} color="#404040" className={styles.icons} />

          <input
            type="text"
            placeholder="Pesquisar"
            className={styles.search}
          />
        </div>
      </div>

      <nav className={styles.nav}>
        <li>
          <a href="#">
            <FaHome className={styles.icons} />
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaUserFriends className={styles.icons} />
            <span>Minha rede</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaBriefcase className={styles.icons} />
            <span>Vagas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaCommentDots className={styles.icons} />
            <span>Mensagens</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaBell className={styles.icons} />
            <span>Notificações</span>
          </a>
        </li>
        <div className={styles.boximgheader}>
          <Image
            className={styles.imgEu}
            src="/1756348824918.png" // Caminho relativo à pasta /public
            alt="Descrição da imagem"
            width={30}
            height={30}
          />
          <div className={styles.boxtextEu}>
            <p>eu</p>
            <FaCaretDown className={styles.icondown} color="#666666" />
          </div>
        </div>
        <Btntema />
      </nav>
    </header>
  );
}
