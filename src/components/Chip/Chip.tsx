import styles from "./Chip.module.scss";
import { ChipProps } from "./ChipProps";

const Chip: React.FC<ChipProps> = ({ id, label, isActive, onClick }) => {
  return (
    <div className={styles.chipContainer}>
      <div
        key={id}
        className={isActive ? styles.activeChip : styles.chip}
        onClick={onClick}
      >
        {label}
      </div>
    </div>
  );
};

export default Chip;
