import styles from "../sidebarLeft/sidebarLeft.module.css";
import Image from "next/image";

export default function SidebarLeft() {
  return (
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
        <p>Front-End / Full Stack Developer</p>
        <p>Estudante de Análise e Desenvolvimento de Sistemas - Faci Wyden - Pa</p>
        <a href="#">Ver perfil completo</a>
      </section>
    </aside>
  );
}
