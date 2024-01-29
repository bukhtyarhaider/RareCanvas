/**
 * Props for the Chip component.
 */
export interface ChipProps {
  /**
   * The unique identifier for the chip.
   */
  id: number; // Replace 'number' with the appropriate type for your id

  /**
   * The label content for the chip.
   */
  label: string; // Replace 'string' with the appropriate type for your label

  /**
   * Flag to determine if the chip is active.
   */
  isActive: boolean;

  /**
   * Event handler for the chip click.
   */
  onClick: () => void;
}
