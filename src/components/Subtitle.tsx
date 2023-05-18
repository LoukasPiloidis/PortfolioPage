import styled from "styled-components";
import { typography, palette, screenSize } from "../utils/variables";

const { white } = palette;
const {
  size: { medium, mobileSmall },
} = typography;
const { mobile } = screenSize;

const StyledSpan = styled.span`
  font-size: ${medium};
  color: ${white};

  @media (max-width: ${mobile}) {
    font-size: ${mobileSmall};
  }
`;

const Subtitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Subtitle;
