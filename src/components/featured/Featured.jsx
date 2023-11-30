import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <b>Hello Folks !</b> Discover my stories and creative ideas.
      </h2>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/ai.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Eclipsing Tomorrow: The Pinnacle of Creativity with Generative AI
          </h1>
          <p className={styles.postDesc}>
            Immerse yourself in the future with the transformative power of
            Generative AI. It's not just about code; it's about crafting
            realities.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
