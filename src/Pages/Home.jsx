import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Certification from "../components/Certification";
import Cta from "../components/Cta";
import Header from "../components/Header";
import HomeFaqs from "../components/HomeFaqs";
import ProductLine from "../components/ProductLine";
import ProductSlider from "../components/ProductSlider";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Banner />
      <ProductLine />
      <ProductSlider />
      <Certification />
      <Cta />
      <Brands />
      <HomeFaqs />
    </div>
  );
};

export default Home;
