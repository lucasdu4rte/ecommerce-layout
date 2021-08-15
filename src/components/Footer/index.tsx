import { MdLocalPostOffice, MdHeadsetMic } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.localization}>
            <h4>Localização</h4>
            <div className={styles.divider} />
            <ul>
              <li>Avenida Andrômeda, 2000. Bloco 6 e 8 </li>
              <li>Alphavile SP</li>
              <li>brasil@corebiz.ag</li>
              <li>+55 11 3090 1039</li>
            </ul>
          </div>

          <div>
            <ul className={styles.buttonList}>
              <li>
                <Link href="/contato" passHref>
                  <a>
                    <button className={styles.buttonAction}>
                      <MdLocalPostOffice size="15px" />
                      <div>ENTRE EM CONTATO</div>
                    </button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/consultor-online" passHref>
                  <a>
                    <button className={styles.buttonAction}>
                      <MdHeadsetMic size="15px" />
                      <div>FALE COM O NOSSO CONSULTOR ONLINE</div>
                    </button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.sponsorsContainer}>
            <ul className={styles.sponsorsList}>
              <li>
                <a>
                  <span>Created by</span>
                  <div className={styles.sponsorImage}>
                    <Image
                      src="/createdby.svg"
                      width={76}
                      height={18}
                      alt="Logo creator"
                      className={styles.logoImage}
                    />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <span>Powered by</span>
                  <div className={styles.sponsorImage}>
                    <Image
                      src="/poweredby.svg"
                      width={60}
                      height={22}
                      // layout="fill"
                      // objectFit="cover"
                      alt="Logo powered"
                      className={styles.logoImage}
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
