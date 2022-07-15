import styled from "styled-components";

export const Technology = styled.header`
  ul,
  li,
  p {
    list-style-type: "- ";
  }
  li {
    color: #fff;
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
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #525252;
    text-underline-offset: 6px;
    text-decoration-thickness: 4px;
    font-weight: 300;
  }

  h2 {
    text-align: center;
    color: #ff006e;
    font-weight: 300;
  }
  .technologies-parent {
    display: flex;
    justify-content: space-evenly;
  }
  .technologies-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
