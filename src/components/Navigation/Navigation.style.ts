import styled from "styled-components";

export const Header = styled.header`
  @media screen and (max-width: 768px) {
    top: 0;
    position: absolute;
  }

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

  button {
    border: none;
    background-color: transparent;
  }

  .nav-btn {
    position: relative;
    z-index: 99;
  }

  .mobile-container {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .desktop-nav {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile-nav {
    width: 100%;
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    background-color: #fff;
    height: 100vh;
    z-index: 98;

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      justify-content: center;
      height: 100%;
    }

    a {
      @media screen and (max-width: 768px) {
        color: #000;
        text-shadow: 1px 1px #ff006e;
      }
    }
  }
`;
