import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import React from "react"
import { useParams } from "react-router-dom"
import { ProjectsList } from "../helpers/ProjectsList"
import { AiFillGithub } from "react-icons/ai"
import { BsPlay } from "react-icons/bs"
import "../styles/css/ProjectDisplay.css"


function sourceButton(URL) {
  if (!URL) {
    return (
      <Button size="sm" light icon={<AiFillGithub />} disabled>
        View Source
      </Button>
    )
  } else {
    return (
      <Button
        size="sm"
        light
        icon={<AiFillGithub />}
        as="a"
        href={URL}
        target="_blank"
      >
        View Source
      </Button>
    )
  }
}

function liveButton(URL) {
  if (!URL) {
    return (
      <Button
        size="sm"
        bordered
        color="gradient"
        ghost
        icon={<BsPlay />}
        disabled
      >
        See Live
      </Button>
    )
  } else {
    return (
      <Button
        size="sm"
        bordered
        color="gradient"
        ghost
        icon={<BsPlay />}
        as="a"
        href={URL}
        target="_blank"
      >
        See Live
      </Button>
    )
  }
}


function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectsList[id]

  return (
    <div
      className="project-display-page"
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh + 320px)",
        paddingBottom: "220px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="content-box"
        style={{ flexBasis: "30%", transform: "translateY(10%)" }}
      >
        <Text h2 css={{ letterSpacing: "$normal" }}>
          {project.name}
        </Text>
        <Card
          isHoverable
          css={{
            width: "100%",
            height: "auto",
          }}
        >
          <Card.Header
            css={{
              position: "relative",
              width: "100%",
              p: 0,
              filter: "brightness(90%)",
            }}
          >
            <Card.Image
              src={project.image}
              width="100%"
              height="250px"
              objectFit="cover"
            />
          </Card.Header>
          <Card.Body css={{}}>
            <Grid.Container gap={2} justify="center">
              <Grid xs={12}>
                <Text size={20} b>
                  {project.desc}
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text b>
                  <Text b color="secondary" css={{ letterSpacing: "$widest" }}>
                    SKILLS:{" "}
                  </Text>
                  <Text b size={15} css={{ letterSpacing: "$wide" }}>
                    {project.skills}
                  </Text>
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="space-evenly">
              {sourceButton(project.sourceURL)}
              {liveButton(project.liveURL)}
            </Row>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default ProjectDisplay
