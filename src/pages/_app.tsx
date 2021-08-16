import type { AppProps } from "next/app";
import "../styles/globals.css";
import "swiper/swiper.min.css";
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
export default MyApp;
