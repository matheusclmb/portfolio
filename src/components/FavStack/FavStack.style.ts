import styled from "styled-components";

export const FavStack = styled.header`
  h1 {
    font-size: 25px;
    text-align: start;
    margin-left: 205px;
    margin-bottom: 20px;
    color: #000;
    text-decoration: underline;
    text-decoration-color: #525252;
    text-underline-offset: 6px;
    text-decoration-thickness: 4px;
    font-weight: 300;
    @media screen and (max-width: 768px) {
      margin: 0 auto;
      margin-bottom: 20px;
      text-align: center;
    }
  }
  .icons {
    display: flex;
    justify-content: space-evenly;
  }
`;
