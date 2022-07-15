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
    margin-top: 100px;
  }
  h1 {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px #ff006e;
  }

  h2 {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px #ff006e;
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
