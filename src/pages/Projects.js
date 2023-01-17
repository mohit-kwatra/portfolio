import React from "react"
import { Text, Grid } from "@nextui-org/react"
import ProjectCard from "../components/ProjectCard"
import { ProjectsList } from "../helpers/ProjectsList"


function Projects() {
  return (
    <div
      className="projects-page"
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        paddingBottom: "250px",
      }}
    >
      <div
        className="content-box"
        style={{
          position: "relative",
          width: "70%",
          margin: "0 auto",
          paddingTop: "180px",
        }}
      >
        <Text
          h2
          css={{
            textAlign: "center",
            letterSpacing: "$wider",
            fontWeight: "$bold",
            textGradient: "to right, #e1eec3, #f05053",
            marginBottom: "50px",
          }}
        >
          My Personal Projects
        </Text>
        <Grid.Container gap={3}>
          {ProjectsList.map((project, idx) => {
            return (
              <Grid xs={12} sm={4} key={idx}>
                <ProjectCard
                  id={idx}
                  image={project.image}
                  title={project.name}
                />
              </Grid>
            )
          })}
        </Grid.Container>
      </div>
    </div>
  )
}

export default Projects
