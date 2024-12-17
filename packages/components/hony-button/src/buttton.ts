export interface ButtonProps {
  size?: 'default' | 'large' | 'small';
  disabled?: boolean;
  type?: 'default' | 'success' | 'warning' | 'danger';
  icon?: string;
  iconPosition?: 'left' | 'right';
  secondary?: boolean;
  tertiary?: boolean;
  text?: boolean;
  link?: boolean;
  loading?: boolean;
  loadingIcon?: string;
}
