import { useMemo, useState } from "react";
import Chip from "../../components/Chip/Chip";
import CustomButton from "../../components/CustomButton/CustomButton";
import NFTCard from "../../components/NFTCard/NFTCard";
import { nftCategories, nftsData } from "../../content";
import styles from "./AllNFTs.module.scss";
import LazyLoad from "react-lazy-load";
import { heroSectionGradient } from "../../assets";
import JoinUs from "../../components/JoinUs/JoinUs";

const AllNFTs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    nftCategories[0].id
  );
  const filteredNfts = useMemo(() => {
    if (selectedCategory === "all") {
      return nftsData;
    } else {
      return nftsData.filter((item) => item.categoryId === selectedCategory);
    }
  }, [nftsData, selectedCategory]);

  const selectCategory = (id: string) => {
    setSelectedCategory(id);
  };
  return (
    <div className={styles.allNFTsContainer}>
      <h2 className={styles.heading}>
        Find
        <span> Rare Canvases</span>
      </h2>

      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Search here ..." />
        <CustomButton title="SEARCH" />
      </div>

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

      <JoinUs />

      <LazyLoad className={styles.gradientBG}>
        <img src={heroSectionGradient} />
      </LazyLoad>
    </div>
  );
};

export default AllNFTs;
