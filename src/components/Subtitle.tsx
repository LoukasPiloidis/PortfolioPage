import styled from "styled-components";
import { typography, palette } from "../utils/variables";

const { white } = palette;
const {
  size: { medium },
} = typography;

const StyledSpan = styled.span`
  font-size: ${medium};
  color: ${white};
`;

const Subtitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Subtitle;
