import React from "react"
import { useNavigate } from "react-router-dom"
import { Card, Text, Row } from "@nextui-org/react"


function ProjectCard(props) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/projects/${props.id}`)}>
      <Card
        isHoverable
        className="project-card"
        css={{
          width: "100%",
          height: "250px",
          cursor: "pointer",
          transition: "400ms",
          "&:hover": {
            "& img": {
              transform: "scale(1.1,1.1)",
            },
          },
        }}
      >
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={props.image}
            width="100%"
            height="100%"
            objectFit="cover"
            css={{ opacity: 0.8, transition: "600ms" }}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bottom: 0,
            zIndex: 1,
            bgBlur: "#ffffff80",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Row justify="center">
            <Text b color="$gray50">
              {props.title}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default ProjectCard
