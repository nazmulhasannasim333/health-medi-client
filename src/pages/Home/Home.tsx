import AboutUs from "../../component/About/About";
import Action from "../../component/Action/Action";
import Banner from "../../component/Banner/Banner";
import Contact from "../../component/Contact/Contact";
import Gallery from "../../component/Gallery/Gallery";
import Supplies from "../../component/Supplies/Supplies";
import Testimonials from "../../component/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Supplies />
      <Testimonials />
      <Gallery />
      <AboutUs />
      <Action />
      <Contact />
    </div>
  );
};

export default Home;
