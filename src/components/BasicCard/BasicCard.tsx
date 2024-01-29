import LazyLoad from "react-lazy-load";
import styles from "./BasicCard.module.scss";
import { BasicCardProps } from "./BasicCardProps";

const BasicCard: React.FC<BasicCardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.basicCardContainer}>
      <LazyLoad className={styles.iconWrapp}>
        <img src={image} alt="Card Icon" />
      </LazyLoad>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BasicCard;
