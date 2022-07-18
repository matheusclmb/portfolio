import styled from "styled-components";

export const ProjectInfo = styled.header`
  .projects-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 20px;
    margin: 40px;
  }

  .project-info {
    display: flex;
    flex-direction: column;
  }

  img {
    border-radius: 10px;
    object-fit: cover;
  }

  .project-info-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .href-projects {
    display: flex;
    gap: 20px;
  }

  a {
    color: #ff006e;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
