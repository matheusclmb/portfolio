import styled from "styled-components";

export const MainHeader = styled.header`
  h2 {
    color: #000;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  svg {
    display: inline;
    fill: #000;
  }

  .logo-info {
    display: flex;
    margin: 0 auto;
    width: fit-content;
    gap: 10px;
    align-items: center;
    font-size: 24px;
  }
`;
