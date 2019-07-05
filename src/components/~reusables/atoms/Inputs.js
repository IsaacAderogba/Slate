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
  width: 100%;
  max-width: 324px;
  background-color: transparent;
  border: 1px solid ${white};
  border-radius: 4px;
  padding-left: ${small_space};
  margin-bottom: ${props => (props.margin ? props.margin : medium_space_1)};
  color: ${text};
  font-weight: 500;

  &:focus {
    border-color: ${alt_background};
    outline: 0 none;
  }

  ::placeholder {
    color: ${alt_background};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${alt_background};
  }

  ::-ms-input-placeholder {
    color: ${alt_background};
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    font-size: ${body_1};
  }
`;
