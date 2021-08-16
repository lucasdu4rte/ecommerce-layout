import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./styles.module.scss";
import Product from "../../../Product";
import { products } from "../../../../utils/data";

const BestSellers: React.FC = () => {
  return (
    <section>
      <div className={styles.container}>
        <h4>Mais Vendidos</h4>
        <div className={styles.divider} />
        <div className={styles.swiperContainer}>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            width={360}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
                width: 320
              },
              768: {
                width: 768,
                slidesPerView: 3,
                spaceBetween: 40,
                pagination: true,
              },
              1024: {
                width: 1024,
                slidesPerView: 4,
                spaceBetween: 40,
                pagination: true,
              },
              1080: {
                width: 1080,
                slidesPerView: 4,
                spaceBetween: 40,
                pagination: true,
              },
              1280: {
                width: 1280,
                slidesPerView: 4,
                spaceBetween: 40,
                pagination: true,
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
