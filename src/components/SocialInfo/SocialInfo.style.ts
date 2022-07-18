import styled from "styled-components";

export const Header = styled.header`
  .social-container {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-top: 60px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  a {
    text-decoration: none;
    color: #ff006e;
  }
`;
