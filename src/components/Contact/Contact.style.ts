import styled from "styled-components";

export const Header = styled.header`
  .tel-btn {
    border: none;
    border-radius: 10px;
    padding: 10px;
  }

  .tel-btn:hover {
    background-color: #0078aa;
  }
  button {
    background-color: #27272a;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
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
