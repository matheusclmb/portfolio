import styled from "styled-components";

export const MainAbout = styled.header`
  h1 {
    color: #fff;
  }
  .about-parent {
    position: relative;
    display: flex;
    height: 350px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
  .about-wrapper {
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid #fff;
    box-shadow: 2px 2px 10px #ff006e;
    max-width: 350px;
    width: 50%;
    height: 100%;
  }
  .info-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
  }
  h1 {
    text-shadow: 2px 2px #ff006e;
  }
  p {
    color: #fff;
    position: relative;
  }
`;
