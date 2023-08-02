import imageReact from "../../assets/Logo_react.png";
import imageRedux from "../../assets/Logo_Redux.png";
import imageNode from "../../assets/Logo_nodejs.png";
import imageSequelize from "../../assets/sequelize-logo.png";
import imagePostgreSQL from "../../assets/Logo_Postgre.png";
import imageCSS from "../../assets/CSS.png";
import imageHTML from "../../assets/html-5.png";
import linkedin from "../../assets/Logo_linkedin.png";
import javascript from "../../assets/js.png";
import { Stack, Image } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Stack gap={2}>
      <Stack gap={5} className="stack-title">
        <h2>Rick and Morty</h2>
        <h2>Proyecto integrador</h2>
      </Stack>
      <Stack gap={3} className="stack-subTitle">
        <p>Soy Sebastián Concheso, estudiante de Henry</p>
        <p>Es una aplicación web que muestra información de la API de Rick and Morty.</p>
      </Stack>
      <Stack gap={3} className="stack-subTitle">
        <p>Tecnologías utilizadas: React, Redux, Node, Express, Sequelize, Javascript, PostgreSQL, CSS, HTML</p>
      </Stack>
      <Stack direction="horizontal" gap={3} className="stack-background">
        <Image src={imageReact} className="logos" alt="image1" />
        <Image src={imageRedux} alt="image2" className="logos" />
        <Image src={imageNode} alt="image3" className="logos" />
        <Image src={imageSequelize} alt="image2" className="logos" />
      </Stack>
      <Stack direction="horizontal" gap={2} className="stack-background">
        <Image src={imagePostgreSQL} alt="image5" className="logos" />
        <Image src={imageCSS} alt="image6" className="logos" />
        <Image src={imageHTML} alt="image7" className="logos" />
        <Image src={javascript} alt="image8" className="logos" />
      </Stack>
      <Stack gap={3} className="stack-title">
        <p>Para ver el código fuente</p>

        <a href="https://github.com/Seba-Concheso" target="_blank" rel="noreferrer">
          <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{ width: "5rem" }} alt="GitHub" />
        </a>

        <p>Para contactarme</p>

        <a href="https://www.linkedin.com/in/sebastian-concheso-83b095226/" target="_blank" rel="noreferrer">
          <Image src={linkedin} alt="LinkedIn" style={{ width: "5rem" }} />
        </a>
      </Stack>
    </Stack>
  );
};

export default About;
