import styled from "styled-components";

export const Technology = styled.header`
  ul,
  li,
  p {
    list-style-type: "- ";
  }
  li {
    color: #000;
  }
  ul {
    padding: 0;
  }
  .technolgies-sect {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  h1 {
    font-size: 25px;
    margin-bottom: 20px;
    text-align: start;
    margin-left: 205px;
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

  h2 {
    text-align: center;
    color: #ff006e;
    font-weight: 300;
  }
  .technologies-parent {
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .technologies-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      width: 100%;
      align-items: center;
      text-align: center;

      ul,
      li {
        width: 100%;
      }
    }
  }
`;
