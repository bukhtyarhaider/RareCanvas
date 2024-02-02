import LazyLoad from "react-lazy-load";
import {
  header1,
  header2,
  header3,
  heroSectionGradient,
  rocketLaunch,
  star,
} from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./HeroSection.module.scss";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.topContentWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>Find Your</h2>
            <h2 className={styles.heading}>
              <span>NFT Dream</span>
            </h2>
            <h2 className={styles.heading}>Creation</h2>
          </div>

          <p className={styles.description}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          <div className={styles.detailsWrapper}>
            <CustomButton
              title="Get Started"
              icon={rocketLaunch}
              onClick={() => navigate("/404")}
            />

            <div className={styles.details}>
              <div className={styles.detail}>
                <p>Artwork</p>
                <h6>25.1k</h6>
              </div>
              <div className={styles.detail}>
                <p>Artist</p>
                <h6>15.6k</h6>
              </div>
              <div className={styles.detail}>
                <p>Aucition</p>
                <h6>10.2k</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <LazyLoad>
              <img className={styles.image2Icon} alt="" src={header3} />
            </LazyLoad>
            <LazyLoad>
              <img
                className={styles.image3Icon}
                loading="eager"
                alt=""
                src={header2}
              />
            </LazyLoad>
            <LazyLoad>
              <img className={styles.image1Icon} alt="" src={header1} />
            </LazyLoad>
          </div>
        </div>
      </div>
      <div className={styles.companiesWrapper}></div>

      <LazyLoad className={styles.gradientBG}>
        <img src={heroSectionGradient} />
      </LazyLoad>

      <LazyLoad>
        <img className={styles.star} src={star} />
      </LazyLoad>
    </div>
  );
};

export default HeroSection;
