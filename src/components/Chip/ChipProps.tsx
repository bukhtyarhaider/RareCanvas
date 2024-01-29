/**
 * Props for the Chip component.
 */
export interface ChipProps {
  /**
   * The unique identifier for the chip.
   */
  id: string;

  /**
   * The label content for the chip.
   */
  label: string;

  /**
   * Flag to determine if the chip is active.
   */
  isActive: boolean;

  /**
   * Event handler for the chip click.
   */
  onClick: () => void;
}
