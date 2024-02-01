import {
  discord,
  facebook,
  github,
  linkedin,
  telegram,
  twitter,
} from "../../assets";
import { footerData } from "../../content";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <h1>RareCanvas</h1>
          <p>
            This growth plan will help you reach your resolutions and achieve
            the goals you have been striving towards.
          </p>
          <div className={styles.socialIconsWrapper}>
            <img src={twitter} />
            <img src={linkedin} />
            <img src={facebook} />
            <img src={github} />
            <img src={telegram} />
            <img src={discord} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          {footerData.map((data) => (
            <div className={styles.content}>
              <h2>{data.heading}</h2>
              {data.links.map((link) => (
                <a href={link.path}>{link.name}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.line} />

      <p className={styles.bottomLine}>© 2023 RareCanvas. All rights reserved.</p>
    </>
  );
};

export default Footer;
