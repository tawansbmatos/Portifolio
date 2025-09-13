import { FaArchive, FaFileArchive, FaImage, FaJournalWhills, FaPager, FaYoutube } from "react-icons/fa";
import styles from "../feeds/feed.module.css";
import Image from "next/image";
import { FaArrowDownWideShort, FaSheetPlastic } from "react-icons/fa6";
export default function Feed() {
  return (
    <main className={styles.feed}>
      <div className={styles.boxnewPost}>
        <div className={styles.newPost}>
          <Image
            src="/1756348824918.png"
            width={50}
            height={50}
            alt="imagem de perfil"
            className={styles.imgfeed}
          />
          <textarea id="textafeed" placeholder="Comece uma publicação"></textarea>
        </div>
        <div className={styles.boxiconspostfeed}>
          <div className={styles.boxicons}>
            <FaYoutube 
            color="#639948"
            size={25}
            />
            <span>Vídeo</span>
          </div>
          <div className={styles.boxicons}>
            <FaImage 
            color="#3593e6"
            size={25}
            />
            <span>Foto</span>
          </div>
          <div className={styles.boxicons}>
            <FaSheetPlastic 
            color="#de6249"
            size={20}
            />
            <span>Escreva um artigo</span>
          </div>

        </div>
      </div>

      <section className={styles.filter}>
        <div className={styles.line}>
        </div>
        <div className={styles.boxfilter}>
          <p>Calssificar por:<strong>Populares</strong></p>
          <FaArrowDownWideShort/>
        </div>
      </section>
    </main>
  );
}
