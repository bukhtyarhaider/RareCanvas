import LazyLoad from "react-lazy-load";
import styles from "./ArtistCard.module.scss";
import { ArtistCardProps } from "./ArtistCardProps";

const ArtistCard: React.FC<ArtistCardProps> = ({
  image,
  name,
  sales,
  rankNumber,
}) => {
  return (
    <div className={styles.artistCardContainer}>
      <LazyLoad className={styles.profileWrapp}>
        <img src={image} alt="profile" />
      </LazyLoad>
      <h6 className={styles.name}>{name}</h6>
      <p className={styles.sales}>
        Total Sales: <span>{sales} ETH</span>
      </p>

      <div className={styles.rankNumber}>{rankNumber}</div>
    </div>
  );
};

export default ArtistCard;
