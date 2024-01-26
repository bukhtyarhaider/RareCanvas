/**
 * Props for the NFTCard component.
 */
export interface NFTCardProps {
  /**
   * The image source for the NFT.
   */
  image: string;

  /**
   * The type of artist associated with the NFT.
   */
  artistType: string;

  /**
   * The name of the artist.
   */
  artistName: string;

  /**
   * The price of the NFT.
   */
  price: string;

  /**
   * The highest bid for the NFT.
   */
  heighestBid: string;
}
