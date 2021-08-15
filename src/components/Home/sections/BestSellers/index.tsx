import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

import styles from "./styles.module.scss";
import Product from "../../../Product";
import { products } from "../../../../utils/data";

SwiperCore.use([Navigation]);

const BestSellers: React.FC = () => {
  return (
    <section>
      <div className={styles.container}>
        <h4>Mais Vendidos</h4>
        <div className={styles.divider} />
        <div className={styles.swiperContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // navigation
            pagination={{
              clickable: true,
            }}

            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.title}>
                <Product
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  stars={product.stars}
                  basePrice={product.basePrice}
                  creditPrice={product.creditPrice}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
