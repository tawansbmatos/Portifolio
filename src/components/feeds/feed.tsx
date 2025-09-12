import styles from '../feeds/feed.module.css';

export default function Feed() {
  return (
    <main className={styles.feed}>
      <div className={styles.newPost}>
        <h3>Criar nova publicação</h3>
        <button className={styles.buttonPhoto}>Foto</button>
        <button className={styles.buttonVideo}>Vídeo</button>
      </div>

      <div className={styles.post}>
        <p><strong>Flávio Guimarães</strong></p>
        <p>Amém?</p>
        <div className={styles.postImage}>[Imagem com texto]</div>
      </div>
    </main>
  )
}
