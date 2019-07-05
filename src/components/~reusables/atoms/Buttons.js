// styles
import styled from 'styled-components';
import { extra_small_space } from '../variables/spacing';
import { orange_gradient, white, text } from '../variables/colors';
import { button_text } from '../variables/font-sizes'

export const Button = styled.button`
  font-size: ${button_text};
  font-weight: 600;
  padding: 6px ${extra_small_space};
  min-width: ${props => (props.width ? props.width : '160px')};
  height: 40px;
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.11);
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
  
  &:active {
    opacity: .8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, .11);
  }
`;

export const ButtonPrimary = styled(Button)`
  background: ${props => props.color ? props.color : orange_gradient};
  color: ${white};
`;

export const ButtonSecondary = styled(Button)`
  background: ${white};
  color: ${text};
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${text};
  padding: 0;
  min-width: auto;
  box-shadow: none;
`;
