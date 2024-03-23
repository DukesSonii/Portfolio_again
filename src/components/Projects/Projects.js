import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import CMDS from "../../Assets/Projects/CMDS.png";
import stack from "../../Assets/Projects/stackover.png";
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SocialSphere"
              description="
              Developed a full-stack social media replica with React, NodeJS, and MongoDB, ensuring a smooth user journey.
              Established a secure authentication system for seamless sign-up, login, and profile management.
              Crafted an intuitive interface for effortless post creation and real-time feed updates, encouraging user engagement.
              Integrated Cloudinary for efficient storage of user-generated content, enhancing user experience.
              Utilized MongoDB for seamless data management, optimizing performance.
              Overall, the platform offers a streamlined experience for users to connect and share content seamlessly.."
              ghLink="https://github.com/DukesSonii/Social-Media-Clone/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ArtLoom"
              description="
              Crafted an intuitive e-commerce platform for poster enthusiasts, offering a diverse selection across categories like Animes, TV Shows, and Sports.
              Users can browse, select, and add posters to their carts with ease, while curated top picks enhance discovery.
              Integrated Stripe for secure payment processing, ensuring seamless transactions via credit or debit cards.
              Overall, the platform delivers a streamlined shopping experience, combining user-friendly interface design with robust backend functionality."
              ghLink="https://github.com/DukesSonii/E-commerce-Website"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CMDS}
              isBlog={false}
              title="Smart CMDS"
              description="
              Developed software for deploying Chaff and Flare Countermeasures via Counter Measure Dispensing Systems, ensuring Aircraft and Naval Ship safety against missile threats.
              Engineered autonomous threat detection algorithms, halving response times and achieving 100% accuracy in neutralization, saving lives.
              Utilized C++ and Computer Graphics to streamline design processes, reducing time by 30% and increasing accuracy by 20%.
              Overall, the project revolutionized defense capabilities with innovative technology and efficient design strategies."
              ghLink="https://github.com/DukesSonii/AI-based-smart-CMDS"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stack}
              isBlog={false}
              title="Stack overflow Website Clone"
              description="
              Developed from scratch, my cloned version of Stack Overflow mirrors the renowned Q&A platform for programmers, highlighting my 
              adeptness in web development. It replicates Stack Overflow's core functionalities, enabling users to pose questions, offer 
              answers, and participate in voting and reputation systems. Integrated tagging and categorization features facilitate effortless 
              navigation and content discovery. This project serves as a testament to my capability in crafting intricate web applications
               while upholding the community ethos of the original platform."
              ghLink="https://github.com/DukesSonii/Stack-Overflow-Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
