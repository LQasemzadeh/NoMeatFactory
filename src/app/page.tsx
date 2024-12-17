import Hero from "@/app/Components/Hero";
import AboutUs from "@/app/Components/AboutUs";
import Banner from "@/app/Components/Banner";
import Products from "@/app/Components/Products";
import Footer from "@/app/Components/Footer/Footer";
import Adsbar from "@/app/Components/Adsbar";
import Contact from "@/app/Components/Contact";
import Apart from "@/app/Components/Apart";
import Services from "@/app/Components/Services";






export default function Home() {
  return (
<div>
  <Hero />
  <AboutUs />
  <Banner />
  <Services />
  <Products />
  <Adsbar />
  <Contact />
  <Footer />

</div>  );
}
