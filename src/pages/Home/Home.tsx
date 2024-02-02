import Brands from "../../components/Brands/Brands";
import CreateNFT from "../../components/CreateNFT/CreateNFT";
import Creators from "../../components/Creators/Creators";
import FancyDrop from "../../components/FancyDrop/FancyDrop";
import HeroSection from "../../components/HeroSection/HeroSection";
import JoinUs from "../../components/JoinUs/JoinUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Brands />
      <FancyDrop />
      <CreateNFT />
      <Creators />
      <JoinUs />
    </div>
  );
};

export default Home;
