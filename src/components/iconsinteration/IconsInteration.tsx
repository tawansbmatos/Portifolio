import { FaComment, FaPaperPlane, FaThumbsUp } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import styles from "../iconsinteration/IconsInteration.module.css"

export default function IconsInteration() {
  return (
    <div className={styles.container}>
      <div className={styles.boxicon}>
        <FaThumbsUp />
        <span>Gostei</span>
      </div>
      <div className={styles.boxicon}>
        <FaComment />
        <span>Comentar</span>
      </div>
      <div className={styles.boxicon}>
        <FaShareNodes />
        <span>Compartilhar</span>
      </div>
      <div className={styles.boxicon}>
        <FaPaperPlane />
        <span>Enviar</span>
      </div>
    </div>
  );
}
