/**
 * Props for the CustomButton component.
 */
export interface CustomButtonProps {
    /**
     * The icon for the button.
     */
    icon?: string;
  
    /**
     * The text content of the button.
     */
    title: string;
  
    /**
     * Event handler for the button click.
     */
    onClick?: () => void;
  }
  