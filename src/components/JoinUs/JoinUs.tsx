import LazyLoad from "react-lazy-load";
import styles from "./JoinUs.module.scss";
import { envelope, newletter } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";

const JoinUs = () => {
  return (
    <div className={styles.joinUsContainer}>
      <div className={styles.imageContainer}>
        <LazyLoad className={styles.imageWrapp}>
          <img src={newletter} />
        </LazyLoad>
      </div>
      <div className={styles.contentContainer}>
        <h2>Join Us On Our Magic Journey</h2>
        <p>Get exclusive promotions & updates straight to your inbox.</p>

        <div className={styles.subscribeWrapper}>
          <input type="email" placeholder="Enter your email here" />
          <CustomButton icon={envelope} title="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
