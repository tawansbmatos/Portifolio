import { FaAndroid } from "react-icons/fa6";
import styles from "../sidebarRight/sidebarRight.module.css";
import { FaSadCry } from "react-icons/fa";
export default function SidebarRight() {
  return (
    <aside className={styles.sidebarRight}>
      <div className={styles.boxtitles}>
        <h3>LinkedIn Notícias</h3>
        <FaAndroid />
      </div>
      <div className={styles.contentsidebar}>
        <span className={styles.sp}>Assunto em alta</span>
        <ul className={styles.listas}>
          <li>
            <a href="#">
              <span className={styles.sp1}>
                Os 100 melhores progrmas MBA ...
              </span>
              <span className={styles.sp2}>ha 39 min - 2.024 leitores</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={styles.sp1}>
                Os 100 melhores progrmas MBA ...
              </span>
              <span className={styles.sp2}>ha 39 min - 2.024 leitores</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={styles.sp1}>
                Os 100 melhores progrmas MBA ...
              </span>
              <span className={styles.sp2}>ha 39 min - 2.024 leitores</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={styles.sp1}>
                Os 100 melhores progrmas MBA ...
              </span>
              <span className={styles.sp2}>ha 39 min - 2.024 leitores</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={styles.sp1}>
                Os 100 melhores progrmas MBA ...
              </span>
              <span className={styles.sp2}>ha 39 min - 2.024 leitores</span>
            </a>
          </li>
        </ul>

        <h3>Jogos de hoje</h3>
        <ul>
          <li>
            <a href="#">
              <FaSadCry />

              <div>
                <p>Queens</p>
                <span>Coroar cada região</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <FaSadCry />

              <div>
                <p>Tango</p>
                <span>Tudo se encaixa</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <FaSadCry />

              <div>
                <p>Zip</p>
                <span>Complete o caminho</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <FaSadCry />

              <div>
                <p>Mini sudoku</p>
                <span>O jogo clássico, no formato mini</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
