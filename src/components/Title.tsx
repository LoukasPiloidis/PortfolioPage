import styled from "styled-components";
import { palette } from "../utils/variables";

const { blue } = palette;

const StyledSpan = styled.span`
  font-size: 48px;
  line-height: 55px;
  text-align: center;

  color: ${blue};

  text-shadow: 4px 4px 2px rgba(255, 255, 255, 0.08);
`;

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Title;
