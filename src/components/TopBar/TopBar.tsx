import { logo } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./TopBar.module.scss";
const TopBar = () => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.wrap}>
          <img src={logo} />
        </div>
      </div>
      <div className={styles.menuWrapper}>
        <p>Marketplace</p>
        <p>Creator</p>
        <p>Ranking</p>
      </div>
      <div className={styles.buttonWrapper}>
        <CustomButton title="Contact Us" />
      </div>
    </div>
  );
};

export default TopBar;
