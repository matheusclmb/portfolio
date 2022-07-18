import styled from "styled-components";

export const Header = styled.header`
  .tel-btn {
    background-color: #3ab4f2;
    border: none;
    border-radius: 10px;
    padding: 10px;
  }

  .tel-btn:hover {
    background-color: #0078aa;
  }
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ff8b8b;
    border: none;
    border-radius: 10px;
    padding: 10px;
  }

  button:hover {
    cursor: pointer;
    background-color: #eb4747;
  }

  img {
    width: 30px;
    height: 30px;
  }

  .contact-container {
    text-align: center;
    margin-top: 60px;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  a {
    text-decoration: none;
  }
`;
