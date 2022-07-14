import styled from "styled-components";

export const Header = styled.header`
  nav {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  h2 {
    color: #fff;
  }
  ul {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px #ff006e;
  }
  a:hover {
    color: #ff006e;
    text-shadow: 1px 1px #fff;
  }
  svg {
    display: inline;
    fill: #fff;
  }

  .logo-info {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
