import React from "react"
import { Text, Card, Grid, Image } from "@nextui-org/react"
import SkillsCardBadge from "./SkillsCardBadge"


function SkillsCard(props) {
  return (
    <Card
      variant="bordered"
      style={{
        backgroundColor: "rgba(255,255,255,0.7)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 10px 1px rgba(255,255,255,0.2)",
        marginBottom: "60px",
      }}
    >
      <Grid.Container gap={3} justify="center">
        <Grid xs={12} sm={4} alignItems="center" justify="center">
          <Image src={props.image} width={"100px"} height={"100px"} />
        </Grid>

        <Grid xs={12} sm={8} direction="column">
          <Card.Header>
            <Text b color="$gray100">
              {props.title}
            </Text>
          </Card.Header>
          <Card.Divider css={{ backgroundColor: "grey" }} />

          <Card.Body>
            <Grid.Container gap={1}>
              {props.data.map(function (item, idx) {
                return (
                  <Grid xs={6} justify="center" key={idx}>
                    <SkillsCardBadge icon={item[0]} text={item[1]} />
                  </Grid>
                )
              })}
            </Grid.Container>
          </Card.Body>
        
        </Grid>
      </Grid.Container>
    </Card>
  )
}

export default SkillsCard
