import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Beyond Borders: Journeying Through the Soul of Travel.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aurora Venturewell</span>
            <span className={styles.date}> - 05.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Cultural Kaleidoscope: Exploring the Tapestry of Traditions.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Harper Stylington</span>
            <span className={styles.date}> - 17.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Flavors of Fusion: A Gastronomic Odyssey.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Culinary Voyager</span>
            <span className={styles.date}> - 07.09.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Couture Canvas: Painting Style Across Runways, Unveiling Trends &
            Igniting Passion.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> Isabella Fashionista</span>
            <span className={styles.date}> - 15.06.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
