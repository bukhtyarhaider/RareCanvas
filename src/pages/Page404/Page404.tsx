import {
  gradientBlueBG,
  gradientPurpleBG,
  cross1,
  cross2,
  cross3,
  ellipse1,
  ellipse2,
  ellipse3,
  figmaIcon,
  switchBg,
  switchBgMobile,
  upworkIcon,
} from "../../assets";
import { ReactSVG } from "react-svg";
import styles from "./Page404.module.scss";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Page404 = () => {
  return (
    <div className={styles.page404Container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>404</h2>
        <h3 className={styles.subHeading}>Page not found</h3>
        <p>
          We’re sorry. The page you requested could no be found It’s either
          under construction or you don’t have the access to it.
        </p>
        <div className={styles.buttonsContainer}>
          <Link
            to="https://www.figma.com/proto/fRbb7YQ8bAlEppiRjWYacP/All-Designs?type=design&node-id=3-41486&t=BeUjtqNfNWGljbOU-0&scaling=min-zoom&page-id=3%3A38850"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.figmaButton}>
              <ReactSVG src={figmaIcon} />
              <span>Check prototype</span>
            </button>
          </Link>

          <Link
            to="https://www.upwork.com/freelancers/bukhtyarh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.upworkButton}>
              <ReactSVG src={upworkIcon} /> <span>Talk to me</span>
            </button>
          </Link>
        </div>
      </div>
      <Link to="/" className={styles.goToHome}>
        Home
      </Link>

      <div className={styles.elements}>
        <LazyLoad>
          <ReactSVG className={styles.switchBg} src={switchBg} />
        </LazyLoad>
        <LazyLoad>
          <ReactSVG className={styles.switchBgMobile} src={switchBgMobile} />
        </LazyLoad>
        <LazyLoad>
          <ReactSVG className={styles.cross1} src={cross1} />
        </LazyLoad>
        <LazyLoad>
          <ReactSVG className={styles.cross2} src={cross2} />
        </LazyLoad>
        <LazyLoad>
          <ReactSVG className={styles.cross3} src={cross3} />
        </LazyLoad>
        <LazyLoad>
          <ReactSVG className={styles.ellipse1} src={ellipse1} />
        </LazyLoad>
        <LazyLoad>
          <ReactSVG className={styles.ellipse2} src={ellipse2} />
        </LazyLoad>
        <LazyLoad>
          <ReactSVG className={styles.ellipse3} src={ellipse3} />
        </LazyLoad>
      </div>

      <div className={styles.gradientBlueBG}>
        <img src={gradientBlueBG} alt="gradientBlueBG" />
      </div>

      <div className={styles.gradientPurpleBG}>
        <img src={gradientPurpleBG} alt="gradientPurpleBG" />
      </div>

      <div className={styles.bg}></div>
    </div>
  );
};

export default Page404;
