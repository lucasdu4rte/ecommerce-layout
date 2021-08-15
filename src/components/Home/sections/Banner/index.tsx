import Image from "next/image";

import { useWindowSize } from "../../../../hooks/useWindowSize";

import styles from "./styles.module.scss";

const Banner = () => {
  const { width } = useWindowSize();

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.background}>
          <Image
            src={width > 720 ? "/banner.jpg" : "/banner-bg-card.jpg"}
            alt="banner"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.bannerTitle}>
              Olá, o que você está buscando?
              <h1>Criar ou migrar seu e-commerce?</h1>
            </div>
          </div>
          <div className={styles.rightContent}></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
