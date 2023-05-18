import styled from "styled-components";
import { palette, typography, screenSize } from "../utils/variables";

const { blue } = palette;
const {
  size: { large, mobileLarge },
} = typography;
const { mobile } = screenSize;

const StyledSpan = styled.span`
  font-size: ${large};
  line-height: 55px;
  text-align: center;

  color: ${blue};

  text-shadow: 4px 4px 2px rgba(255, 255, 255, 0.08);

  @media (max-width: ${mobile}) {
    font-size: ${mobileLarge};
  }
`;

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Title;
