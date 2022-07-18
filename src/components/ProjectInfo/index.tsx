import Link from "next/link";
import Image from "next/image";
import * as P from "./ProjectInfo.style";

export const ProjectInfo = () => {
  const projectindex = [
    {
      label: "MasterDjango",
      href: "https://github.com/matheusclmb/master-django-project",
      live: "https://masterdjango.herokuapp.com/",
      custom_targ: "_blank",

      src: "/imgs/masterdjango.png",
      about:
        "A little project for interviewers evaluate my knowledge and experience in Django Framework. This was solely made to get my first job in this area.",
      technologies: "Django, Python, JavaScript, HTML, CSS",
    },
    {
      label: "Unofficial Lost Ark REST API",
      href: "https://github.com/matheusclmb/unofficial_lostark_rest_api",
      live: "https://unofficiallostarkapi.herokuapp.com/",
      custom_targ: "_blank",

      src: "/imgs/lostarkapi.png",
      about:
        "Unofficial Lost Ark REST API to facilitate the creation of applications and the usage of game's data.",
      technologies:
        "Django, Django REST, Python, JavaScript, HTML, CSS, TailWind, Heroku, Amazon RDS & S3, PostgreSQL, BeautifulSoup",
    },
    {
      label: "SHORTY",
      href: "https://github.com/matheusclmb/Shorty-Django-Version",
      live: "https://persadev.pythonanywhere.com/",
      custom_targ: "_blank",

      src: "/imgs/shorty.png",
      about: "An URL Shortener. Created for a company skill evaluation.",
      technologies:
        "Django, Django REST, Python, JavaScript, HTML, CSS, Selenium",
    },
    {
      label: "CLMB Panel",
      href: "#",
      live: "#",
      custom_targ: "",
      src: "/imgs/clmbpanel.png",
      about: "Private CRM for a construction/remodeling company.",
      technologies:
        "Django, Python, JavaScript, HTML, CSS, TailWind, DaisyUI, ZingChart, OpenWeather, CSV",
    },
  ];

  return (
    <P.ProjectInfo>
      <div className="projects-wrapper">
        {projectindex.map((proj) => (
          <div key={proj.label} className="project-info">
            <Image src={proj.src} width="600px" height="500px"></Image>
            <Link href={proj.href}>
              <a className="nav-links" target="_blank" rel="noreferrer">
                <h1>{proj.label}</h1>
              </a>
            </Link>

            <div className="project-info-text">
              <p>{proj.about}</p>
              <h3>Technologies:</h3>
              <p>{proj.technologies}</p>
              <div className="href-projects">
                <a href={proj.href} target={proj.custom_targ} rel="noreferrer">
                  Source
                </a>
                <a href={proj.live} target={proj.custom_targ} rel="noreferrer">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </P.ProjectInfo>
  );
};
