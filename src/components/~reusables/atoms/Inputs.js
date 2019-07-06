// styles
import styled from "styled-components";
import { small_space, medium_space_1 } from "../variables/spacing";
import { white, alt_background, text } from "../variables/colors";
import { button_text, body_1 } from "../variables/font-sizes";
import { tablet_max_width } from "../variables/media-queries";

export const Input = styled.input`
  font-size: ${button_text};
  box-shadow: 0 0.8rem 2.5rem 0 rgba(40, 51, 63, 0.05);
  transition: all 100ms ease-in-out;
  height: 36px;
  width: 95%;
  max-width: 324px;
  background-color: ${props => (props.hover ? white : 'transparent')};
  border: 1px solid ${white};
  padding-left: ${small_space};
  margin-bottom: ${props => (props.margin ? props.margin : medium_space_1)};
  color: ${text};
  font-weight: 500;
  border-radius: 4px;
  box-shadow: ${props => (props.hover ? '0px 2px 6px rgba(0, 0, 0, 0.11);' : '0 0 0 0')}; 


  &:focus {
    border-color: ${alt_background};
    outline: 0 none;
  }

  ::placeholder {
    color: ${props => (props.hover ? text : alt_background)};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${props => (props.hover ? text : alt_background)};
  }

  ::-ms-input-placeholder {
    color: ${props => (props.hover ? text : alt_background)};
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    font-size: ${body_1};
  }
`;
