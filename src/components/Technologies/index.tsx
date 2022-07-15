import * as S from "./Techonologies.style";
import Image from "next/image";

export const Technologies = () => {
  const languages = [
    {
      label: "HTML",
    },
    {
      label: "CSS",
    },
    {
      label: "JavaScript",
    },
    {
      label: "Python",
    },
  ];

  const frameworks = [
    {
      label: "Django & Django REST",
    },
    {
      label: "Flask",
    },
    {
      label: "NextJS",
    },
  ];

  const databases = [
    {
      label: "SQLite",
    },
    {
      label: "PostgreSQL",
    },
  ];

  const devops = [
    {
      label: "AWS (RDS & S3)",
    },
    {
      label: "Heroku",
    },
    {
      label: "Vercel",
    },
    {
      label: "HostGator",
    },
  ];

  return (
    <S.Technology>
      <div className="technolgies-sect">
        <h1>Technologies</h1>
        <div className="technologies-parent">
          <div className="technologies-child">
            <h2>Holy Grail</h2>
            <ul>
              {languages.map((language) => (
                <li key={language.label}>
                  <p>{language.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="technologies-child">
            <h2>Frameworks</h2>
            <ul>
              {frameworks.map((framework) => (
                <li key={framework.label}>
                  <p>{framework.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="technologies-child">
            <h2>Databases</h2>
            <ul>
              {databases.map((database) => (
                <li key={database.label}>
                  <p>{database.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="technologies-child">
            <h2>Deploy</h2>
            <ul>
              {devops.map((service) => (
                <li key={service.label}>
                  <p>{service.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </S.Technology>
  );
};
