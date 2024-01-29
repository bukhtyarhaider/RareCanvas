import { createNFTData } from "../../content";
import BasicCard from "../BasicCard/BasicCard";
import styles from "./CreateNFT.module.scss";

const CreateNFT = () => {
  return (
    <div className={styles.createNFTContainer}>
      <h2 className={styles.heading}>Create Your Sell NFT</h2>

      <div className={styles.cardsWrapp}>
        {createNFTData.map((data) => (
          <BasicCard
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateNFT;
