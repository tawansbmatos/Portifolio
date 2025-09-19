import Image from "next/image";
import styles from "@/components/posts/post.module.css";
import IconsInteration from "../iconsinteration/IconsInteration";
import { FaGlobe, FaLinkedin, FaPlus, FaTimes, FaXbox } from "react-icons/fa";
import { FaEarthAmericas, FaWordpressSimple } from "react-icons/fa6";

interface PostsProps {
  author: string;
  experience: string;
  video?: string; // ID do vídeo do YouTube
  avatarUrl: string;
  content: string;
  date: string;
  color?: string;
  imageUrl?: string;
}

export default function PostCard({
  author,
  avatarUrl,
  video,
  experience,
  content,
  color = "#0071bd",
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
          <div className={styles.autor}>
            <h3>{author}</h3>
            <FaLinkedin 
            color={color}
            />
          </div>

          <span className={styles.spxp}>{experience}</span>
          <div className={styles.boxdateicon}>
            <p>{date}</p>
            <FaEarthAmericas />
          </div>
        </div>
        <div className={styles.iconsx}>
          <p>...</p>
          <p>x</p>
          
        </div>
      </div>

      <p className={styles.textoPost}>{content}</p>

      <div className={styles.csimgvideo}>
        {imageUrl && (
          <div className={styles.imageContainer}>
            <Image
              className={styles.imgPost}
              src={imageUrl}
              alt="Post image"
              width={450}
              height={450}
            />

            <IconsInteration />
          </div>
        )}

        {!imageUrl && video && (
          <div className={styles.videoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${video}?modestbranding=1&rel=0&autoplay=0&fs=1&iv_load_policy=3`}
              title="YouTube video player"
              frameBorder="0"
              className={styles.videoIframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
