import './MyLabel.css';

export interface MyLabelProps {
   /**
   * Label contents
   */
    label: string;
    /**
   * How large should the label be?
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * View contents in capital letters
   */
    allCaps?: boolean;
   /**
   * How should the label color?
   */ 
    color?: 'primary' | 'secondary' | 'tertiary',
    /**
   * How should the label color customized?
   */ 
    customFontColor?: string;
    backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ( { 
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    customFontColor,
    backgroundColor = 'transparent'
 }: MyLabelProps) => {
  return (
    <span 
      className={ `label ${ size } ${ color && 'text-' + color }` } 
      style={{ color: customFontColor, backgroundColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;