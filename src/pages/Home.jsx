import Header from "../component/Header";
import AboutSection from "../component/AboutSection";
import MarqueeBanner from "../component/MarqueeBanner";
import VisionSection from "./VisionSection";
import TeamSection from "./TeamSection";
import EntitiesSection from "./EntitiesSection";
import AppInfoSection from "./AppInfoSection";
import SponsorsSection from "../component/SponsorsSection";
import BlogCarousel from "../component/BlogCarousel";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Header />

      <div className="my-6">
        <MarqueeBanner />
      </div>

      <div className="my-10">
        <AboutSection />
      </div>

      <div className="my-10">
        <VisionSection />
      </div>
      <div className="my-10">
        <TeamSection />
      </div>
      <div className="my-10">
        <EntitiesSection />
      </div>
      {/* <div className="my-10">
        <AppInfoSection />
      </div> */}
      <div className="my-10">
        <SponsorsSection />
      </div>
      <div className="my-10">
        <BlogCarousel />
      </div>
      <div className="my-10">
        <ContactSection />
      </div>
      <div className="my-10">
        <Footer />
      </div>
    </>
  );
}

export default Home;