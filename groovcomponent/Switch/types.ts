export type SwitchProps = {
  label: string;
  value: boolean;
  onToggle: (value: boolean) => typeof value | void | Promise<void>;
};
