import Image from "next/image";
import { MdStar, MdStarBorder } from "react-icons/md";
import { useCart } from "react-use-cart";

import { IProductResponse } from "../../types/Product";

import styles from "./styles.module.scss";

type ProductProps = {
  image: string;
  title: string;
  stars: number;
  basePrice?: string | null;
  price: string;
  creditPrice?: string | null;
  originalData: IProductResponse;
};

const Product = ({
  image,
  title,
  stars,
  basePrice,
  price,
  creditPrice,
  originalData,
}: ProductProps) => {
  const { addItem } = useCart();

  return (
    <div className={styles.productContainer}>
      {basePrice && <div className={styles.ribbon}>OFF</div>}
      <div className={styles.image}>
        <Image
          src={image}
          width={216}
          height={200}
          alt="Sapato"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.stars}>
        {Array.from({ length: 5 }, (v, k) => k).map((index) => {
          return (
            <span key={index}>
              {index + 1 > stars ? (
                <MdStarBorder size={12} />
              ) : (
                <MdStar size={12} />
              )}
            </span>
          );
        })}
      </div>
      <div className={styles.basePrice}>{basePrice && `de ${basePrice}`}</div>
      <div className={styles.price}>por {price}</div>
      <div className={styles.creditPrice}>
        {creditPrice && `ou em ${creditPrice}`}
      </div>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={() =>
            addItem({ id: String(originalData.productId), ...originalData })
          }
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default Product;
