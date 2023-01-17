import React from "react"
import { Badge, Grid, Image } from "@nextui-org/react"


function SkillsCardBadge(props) {
  return (
    <Badge
      isSquared
      disableOutline
      css={{
        bgColor: "rgba(0,0,0,0.8)",
        boxShadow: "0 2px 10px 2px rgba(0,0,0,0.25)",
        backdropFilter: "blur(20px)",
        letterSpacing: "$wider",
        fontWeight: "$normal",
        fontSize: "12px",
        color: "$gray900",
      }}
    >
      <Grid.Container gap={0.5}>
        <Grid>
          <Image src={props.icon} width="20px" height="20px" />
        </Grid>
        <Grid css={{ d: "flex", ai: "center", jc: "center" }}>
          <span>{props.text}</span>
        </Grid>
      </Grid.Container>
    </Badge>
  )
}

export default SkillsCardBadge
