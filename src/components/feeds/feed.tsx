import {
  FaImage,
  FaYoutube,
} from "react-icons/fa";
import styles from "../feeds/feed.module.css";
import Image from "next/image";
import { FaArrowDownWideShort, FaSheetPlastic } from "react-icons/fa6";
import PostCard from "@/components/posts/postCard";


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
          <textarea
            id="textafeed"
            placeholder="Comece uma publicação"
          ></textarea>
        </div>
        <div className={styles.boxiconspostfeed}>
          <div className={styles.boxicons}>
            <FaYoutube color="#639948" size={25} />
            <span>Vídeo</span>
          </div>
          <div className={styles.boxicons}>
            <FaImage color="#3593e6" size={25} />
            <span>Foto</span>
          </div>
          <div className={styles.boxicons}>
            <FaSheetPlastic color="#de6249" size={20} />
            <span>Escreva um artigo</span>
          </div>
        </div>
      </div>

      <section className={styles.filter}>
        <div className={styles.line}></div>
        <div className={styles.boxfilter}>
          <p>Calssificar por:</p>
          <div className={styles.filtertxticon}>
            <p>
              <strong>Populares</strong>
            </p>
            <FaArrowDownWideShort />
          </div>
        </div>
      </section>

      <section>
        <div className={styles.ctPostsFeeds}>
          <PostCard
            author="Tawan Matos"
            avatarUrl="/1756348824918.png"
            content="Olá! Estou desenvolvendo meu portfólio inspirado no design da rede social LinkedIn. A cada linha de código, sinto que estou evoluindo — e isso tem sido incrível ! ... "
            experience="Front-end | React.JS | Next.Js | React Native"
            date="15 de setembro de 2025"
            imageUrl="/post4.jpg"
            color="gold"
          />
          <PostCard
            author="Tawan Matos"
            avatarUrl="/1756348824918.png"
            content="Hoje comecei a criar componentes genéricos com Next.js. Muito massa!"
            experience="Front-end | React.JS | Next.Js | React Native"
            date="15 de setembro de 2025"
            imageUrl="/post3.jpg"
          />
          <PostCard
            author="Tawan Matos"
            avatarUrl="/1756348824918.png"
            content="Olá! Estou desenvolvendo meu portfólio..."
            experience="Front-end | React.JS | Next.Js | React Native"
            date="15 de setembro de 2025"
            imageUrl="/10841_LI_Balloons_GIF.gif"
          />
          <PostCard
            author="Tawan Matos"
            avatarUrl="/1756348824918.png"
            content="Hoje comecei a criar componentes genéricos com Next.js. Muito massa!"
            experience="Front-end | React.JS | Next.Js | React Native"
            date="15 de setembro de 2025"
            imageUrl="/post1.jpeg"
          />
          <PostCard
            author="Tawan Matos"
            avatarUrl="/1756348824918.png"
            content="Olá! Estou desenvolvendo meu portfólio..."
            experience="Front-end | React.JS | Next.Js | React Native"
            date="15 de setembro de 2025"
            imageUrl="/e6e9cf85928537.5d97b7e67f522.gif"
          />
          <PostCard
            author="Tawan Matos"
            avatarUrl="/1756348824918.png"
            content="Hoje comecei a criar componentes genéricos com Next.js. Muito massa!"
            experience="Front-end | React.JS | Next.Js | React Native"
            date="15 de setembro de 2025"
            imageUrl="/post2.webp"
          />
        </div>
      </section>
    </main>
  );
}
