import styled from "styled-components";

export const Header = styled.header`
  nav {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
  }
  h2 {
    color: #fff;
  }
  a {
    color: #000;
    text-decoration: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    list-style: none;
  }
  .nav-links {
    text-decoration: none;
    color: #fff;
    text-shadow: 2px 2px #000;
  }
  .nav-links:hover {
    color: #ff006e;
    text-shadow: 1px 1px #fff;
  }
  svg {
    display: inline;
    fill: #fff;
  }
`;
