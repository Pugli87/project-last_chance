import { Btn } from './Button.styled';

export const Button = ({
  type = 'button',
  variant = 'contained',
  onClick = () => {},
  text = '',
  disabled = false,
}) => {
  return (
    <Btn variant={variant} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </Btn>
  );
};
