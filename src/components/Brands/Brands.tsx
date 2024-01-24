import { coinbase, dropbox, slack, spotify, webflow } from '../../assets';
import styles from './Brands.module.scss';

const Brands = () => {
  return (
    <div className={styles.brandsContainer}>
      <img src={coinbase} />
      <img src={spotify} />
      <img src={slack} />
      <img src={dropbox} />
      <img src={webflow} />
    </div>
  )
}

export default Brands
