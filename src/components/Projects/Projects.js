// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;



import React from "react";
import { Container, Row} from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";

// Example data for projects
const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    imgPath: "/path/to/image1.jpg",
    ghLink: "https://github.com/project1",
    demoLink: "https://project1demo.com",
    isBlog: false,
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2.",
    imgPath: "/path/to/image2.jpg",
    ghLink: "https://github.com/project2",
    demoLink: "https://project2demo.com",
    isBlog: false,
  },
  // Add more projects here
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Pass the projects array as a prop to ProjectCards */}
          <ProjectCards projects={projects} />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
