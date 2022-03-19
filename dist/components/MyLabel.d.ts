/// <reference types="react" />
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
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
   * How should the label color customized?
   */
    customFontColor?: string;
    backgroundColor?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const MyLabel: ({ label, size, allCaps, color, customFontColor, backgroundColor }: MyLabelProps) => JSX.Element;
