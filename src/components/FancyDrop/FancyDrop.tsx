import { useMemo, useState } from "react";
import { nftCategories, nftsData } from "../../content";
import Chip from "../Chip/Chip";
import styles from "./FancyDrop.module.scss";
import NFTCard from "../NFTCard/NFTCard";
import CustomButton from "../CustomButton/CustomButton";

const FancyDrop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    nftCategories[0].id
  );
  const filteredNfts = useMemo(
    () => nftsData.filter((item) => item.categoryId === selectedCategory),
    [nftsData, selectedCategory]
  );

  const selectCategory = (id: string) => {
    setSelectedCategory(id);
  };
  return (
    <div className={styles.fancyDropContainer}>
      <h1 className={styles.heading}>Fancy Drop</h1>

      <div className={styles.chipContainer}>
        {nftCategories.map((category) => (
          <Chip
            isActive={category.id === selectedCategory}
            id={category.id}
            label={category.label}
            onClick={() => selectCategory(category.id)}
          />
        ))}
      </div>

      <div className={styles.nftCardsContainer}>
        {filteredNfts.map((data) => (
          <NFTCard
            image={data.image}
            artistType={data.artistType}
            artistName={data.artistName}
            price={data.price}
            heighestBid={data.heighestBid}
          />
        ))}
      </div>

      <div className={styles.buttonWrapp}>
        <CustomButton title="View More" />
      </div>
    </div>
  );
};

export default FancyDrop;
