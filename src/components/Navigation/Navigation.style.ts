import styled from "styled-components";

export const Header = styled.header`
  nav {
    font-size: 1.5rem;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: #32f34f;
  }
`;
