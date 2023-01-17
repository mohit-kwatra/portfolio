import React from "react"
import { Text, Link, Spacer, Grid } from "@nextui-org/react"
import SkillsCard from "../components/SkillsCard"

import { MdEmail } from "react-icons/md"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

import FrontendLogo from "../assets/img/cards/frontend.png"
import BackendLogo from "../assets/img/cards/backend.png"
import LangsLogo from "../assets/img/cards/languages.jpg"
import HTMLLogo from "../assets/svg/html.svg"
import CSSLogo from "../assets/svg/css.svg"
import JSLogo from "../assets/svg/js.svg"
import ReactJSLogo from "../assets/svg/react.svg"
import BootstrapLogo from "../assets/svg/bootstrap.svg"
import PHPLogo from "../assets/svg/php.svg"
import MySqlLogo from "../assets/svg/mysql-2.svg"
import NodeJSLogo from "../assets/svg/nodejs.svg"
import MongoDBLogo from "../assets/svg/mongo-2.svg"
import CPPLogo from "../assets/svg/cpp.svg"
import PythonLogo from "../assets/svg/python.svg"
import JavaLogo from "../assets/svg/java.svg"


function Home() {
  let iconStyles = {
    fontSize: "1.5rem",
    color: "#ECEDEE",
    margin: "0 7.5px",
  }

  return (
    <div className="home-page" style={{ paddingBottom: "250px" }}>
      <div
        className="hs-wrapper"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="hs-content"
          style={{ transform: "translateY(15%)", background: "none" }}
        >
          <Text css={{ textAlign: "center" }}>
            <Text
              h1
              css={{
                letterSpacing: "$normal",
                textGradient: "to right, #2980b9, #6dd5fa, #ffffff",
              }}
            >
              Mohit Kwatra
            </Text>
            <Text h4 color="$gray800" css={{ mx: "10%" }}>
              A software developer with a passion for learning and creating.
            </Text>
            <Spacer />

            <Link
              href="https://www.linkedin.com/in/mohit-kwatra/"
              target="_blank"
            >
              <AiFillLinkedin style={iconStyles} />
            </Link>
            <Link href="mailto:mohitkwatra118@gmail.com">
              <MdEmail style={iconStyles} />
            </Link>
            <Link href="https://github.com/mohit-kwatra" target="_blank">
              <AiFillGithub style={iconStyles} />
            </Link>
          </Text>
        </div>
      </div>

      <div
        className="ss-wrapper"
        style={{ width: "100%", height: "auto", padding: "0 30px" }}
      >
        <div className="ss-content" style={{ width: "65%", margin: "0 auto" }}>
          <Text
            h2
            css={{
              textAlign: "center",
              letterSpacing: "$wider",
              mb: "50px",
              fontWeight: "$bold",
              textGradient: "to right, #e1eec3, #f05053",
            }}
          >
            SKILLS
          </Text>
          <Grid.Container>
            <Grid sm={9} md={7}>
              <SkillsCard
                image={FrontendLogo}
                title="Frontend"
                data={[
                  [ReactJSLogo, "ReactJS"],
                  [HTMLLogo, "HTML"],
                  [CSSLogo, "CSS"],
                  [JSLogo, "Javascript"],
                  [BootstrapLogo, "Bootstrap"],
                ]}
                style={{ transform: "translateX(-100px)" }}
              />
            </Grid>
          </Grid.Container>
          <Grid.Container justify="end">
            <Grid sm={9} md={7}>
              <SkillsCard
                image={BackendLogo}
                title="Backend"
                data={[
                  [NodeJSLogo, "NodeJS"],
                  [MongoDBLogo, "MongoDB"],
                  [PHPLogo, "PHP"],
                  [MySqlLogo, "MySql"],
                ]}
              />
            </Grid>
          </Grid.Container>
          <Grid.Container>
            <Grid sm={9} md={7}>
              <SkillsCard
                image={LangsLogo}
                title="Languages"
                data={[
                  [CPPLogo, "C++"],
                  [PythonLogo, "Python"],
                  [JavaLogo, "Java"],
                ]}
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  )
}

export default Home
