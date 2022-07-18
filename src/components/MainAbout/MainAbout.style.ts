import styled from "styled-components";

export const MainAbout = styled.header`
  h1 {
    color: #fff;
  }
  .about-parent {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 40px;
    margin-top: 60px;
    background-color: #27272a;
    border-radius: 20px;
    padding: 25px 0 25px 0;
    max-width: 1438px;
    width: 100%;

    @media screen and (max-width: 768px) {
    }
  }
  .about-wrapper {
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #fff;
    max-width: 250px;
    width: 50%;
    height: 100%;
  }
  .info-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    @media screen and (max-width: 768px) {
      padding: 10px;
      width: 100%;
    }
  }
  h1 {
    color: #ff006e;
    font-weight: 300;
  }
  p {
    color: #fff;
    position: relative;
  }
`;
