export type CustomButtonProps = {
  children: string;
  textColor?: string;
  variant?: VariantName;
  onPress?: () => void;
  requesting?: boolean;
  backgroundColor?: string;
}

export type Variant = {
  backgroundColor: string;
  textColor: string;
  loaderColor: string;
};
export type VariantName = 'primary' | 'secondary' | 'disabled';

export type ButtonVariant = {
  [key in VariantName]: Variant;
};
