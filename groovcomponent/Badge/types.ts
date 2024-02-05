import { StyleProp, ViewStyle } from 'react-native';

export type BadgeProps = {
  size?: number;
  messageCount: number;
  badgeStyle?: StyleProp<ViewStyle>;
}