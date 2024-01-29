/**
 * Props for the ArtistCard component.
 */
export interface ArtistCardProps {
  /**
   * The image source for the artist card.
   */
  image: string;

  /**
   * The name of the artist.
   */
  name: string;

  /**
   * The total sales of the artist.
   */
  sales: number;

  /**
   * The rank number of the artist.
   */
  rankNumber: number;
}
