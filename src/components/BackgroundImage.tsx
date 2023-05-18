import styled from "styled-components";

export const Background = styled.img`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100%;
  opacity: 0.1;
  object-fit: cover;
  @media (max-width: 450px) {
    object-position: 70% 50%;
  }
`;
