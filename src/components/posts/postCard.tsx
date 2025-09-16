import Image from "next/image";
import styles from "@/components/posts/post.module.css";

interface PostsProps {
  author: string;
  experience: string;
  video?: string; // ID do vídeo do YouTube
  avatarUrl: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export default function PostCard({
  author,
  avatarUrl,
  video,
  experience,
  content,
  date,
  imageUrl,
}: PostsProps) {
  return (
    <div className={styles.postcard}>
      <div className={styles.header}>
        <Image
          className={styles.avatarPost}
          src={avatarUrl}
          alt={`${author} avatar`}
          width={40}
          height={40}
        />
        <div className={styles.boxnomedata}>
          <h3>{author}</h3>
          <span className={styles.spxp}>{experience}</span>
          <p>{date}</p>
        </div>
      </div>

      <p className={styles.textoPost}>{content}</p>

      {imageUrl && (
        <Image
          className={styles.imgPost}
          src={imageUrl}
          alt="Post image"
          width={500}
          height={500}
        />
      )}

      {!imageUrl && video && (
        <div className={styles.videoContainer}>
          <iframe
            width="496"
            height="390"
            src={`https://www.youtube.com/embed/${video}?modestbranding=1&rel=0&autoplay=0&fs=1&iv_load_policy=3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
