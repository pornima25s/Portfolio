// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;



import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

// This assumes you're passing an array of projects as a prop named `projects`
function ProjectCards({ projects }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {projects.map((p, index) => (
        <motion.div
          key={index}
          className="project-card-view"
          whileHover={{ scale: 1.04, rotate: 2 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="h-200 shadow-lg" style={{ width: "32rem", background: "#32303a", color: "white" }}>
            <Card.Img variant="top" src={p.imgPath} alt="card-img" className="rounded-top" />
            <Card.Body>
              <Card.Title>{p.title}</Card.Title>
              <Card.Text style={{ textAlign: "justify", color: "#afb0b6" }}>
                {p.description}
              </Card.Text>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <Button variant="primary" href={p.ghLink} target="_blank">
                  <BsGithub /> &nbsp;
                  {p.isBlog ? "Blog" : "GitHub"}
                </Button>
                {!p.isBlog && p.demoLink && (
                  <Button variant="primary" href={p.demoLink} target="_blank">
                    <CgWebsite /> &nbsp;
                    Demo
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCards;
