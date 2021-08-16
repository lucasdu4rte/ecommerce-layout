import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { MdMenu } from "react-icons/md";
import { useCart } from "react-use-cart";

import styles from "./styles.module.scss";

export const Header = () => {
  const { totalUniqueItems } = useCart()
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.svg"
                layout="fill"
                objectFit="cover"
                alt="Logo Corebiz"
                className={styles.logoImage}
              />
            </div>
          </div>

          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="O que está procurando?"
            />
            <div className={styles.searchIcon}>
              <GoSearch className={styles.searchIconSvg} />
            </div>
          </div>

          <nav>
            <ul className={styles.navContainer}>
              <li>
                <Link href="/" passHref>
                  <a>
                    <FaRegUser size="18px" />
                    <span>Minha Conta</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a>
                    <HiOutlineShoppingCart size="22px" />
                    <div className={styles.badge}>{totalUniqueItems}</div>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.containerMobile}>
          <div className={styles.inline}>
            <MdMenu size={30} />
            <div>
              <div className={styles.logoContainer}>
                <Image
                  src="/logo.svg"
                  layout="fill"
                  objectFit="cover"
                  alt="Logo Corebiz"
                  className={styles.logoImage}
                />
              </div>
            </div>
            <Link href="/" passHref>
              <a>
                <button type="button" className={styles.cartButton}>
                  <HiOutlineShoppingCart size="22px" />
                  <div className={styles.badge}>{totalUniqueItems}</div>
                </button>
              </a>
            </Link>
          </div>

          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="O que está procurando?"
            />
            <div className={styles.searchIcon}>
              <GoSearch className={styles.searchIconSvg} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
