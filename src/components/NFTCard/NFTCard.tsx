import LazyLoad from "react-lazy-load";
import { artist4 } from "../../assets";
import styles from "./NFTCard.module.scss";
import { NFTCardProps } from "./NFTCardProps";

const NFTCard: React.FC<NFTCardProps> = ({
  image,
  artistType,
  artistName,
  price,
  heighestBid,
}) => {
  return (
    <div className={styles.NFTCardContainer}>
      <LazyLoad className={styles.imageWrapp}>
        <img loading="eager" alt="" src={image} />
      </LazyLoad>
      <div className={styles.nftInfo}>
        <div className={styles.artstInfo}>
          <div className={styles.artistType}>{artistType}</div>
          <div className={styles.artistAvatarName}>
            <LazyLoad className={styles.avatar}>
              <img loading="eager" alt="artist" src={artist4} />
            </LazyLoad>
            <div className={styles.artistName}>{artistName}</div>
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <div className={styles.leftSide}>
            <div className={styles.title}>Price</div>
            <div className={styles.value}>{price}</div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.title}>Highest Bid</div>
            <div className={styles.value}>{heighestBid}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
