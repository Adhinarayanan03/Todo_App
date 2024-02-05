export type HeaderProps = {
  title: string;
  contentColor?: string;
  rightIconSize?: number;
  rightIconName?: string;
  backgroundColor?: string;
  content?: React.ReactNode;
  onPressBack?: () => void;
  onPressRightIcon?: () => void;
  renderRightComponent?: React.ReactNode;
}
