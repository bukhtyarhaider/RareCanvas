import { artistsData } from "../../content";
import ArtistCard from "../ArtistCard/ArtistCard";
import styles from "./Creators.module.scss";

const Creators = () => {
  return (
    <div className={styles.creatorsContainer}>
      <h2>Top creators</h2>
      <p>Checkout Top Rated Creators on the NFT Marketplace</p>

      <div className={styles.artistsCardsContainer}>
        {artistsData?.map((artist, index) => (
          <ArtistCard
            image={artist.image}
            name={artist.name}
            sales={artist.sales}
            rankNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Creators;
