import React from "react"
import { Link, Text } from '@nextui-org/react'
import {StyledFooter} from '../styles/Footer'
import {FooterLink} from '../styles/FooterLink'

import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'


function Footer() {
  return (
    <StyledFooter>
      <FooterLink href="mailto:mohitkwatra118@gmail.com" target="_blank">
        <MdEmail />
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/mohit-kwatra/"
        target="_blank"
      >
        <AiFillLinkedin />
      </FooterLink>
      <FooterLink href="https://github.com/mohit-kwatra" target="_blank">
        <AiFillGithub />
      </FooterLink>
      <FooterLink href="https://twitter.com/Mohitkwatra_" target="_blank">
        <AiOutlineTwitter />
      </FooterLink>
      <div
        className="footer-text"
        style={{
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          zIndex: 2,
          paddingBottom: "5px",
        }}
      >
        <Text size={13} css={{ letterSpacing: "$normal" }}>
          <Text color="$gray700" as={"span"}>
            created by
          </Text>{" "}
          <Link href="https://github.com/mohit-kwatra" target="_blank">
            Mohit Kwatra
          </Link>
        </Text>
        <Text size={14} css={{ fontWeight: "500", letterSpacing: "$wider" }}>
          <Link color={"text"} href="https://www.netlify.com/" target="_blank">
            Deployed on&nbsp;
            <SiNetlify />
            Netlify
          </Link>
        </Text>
      </div>
    </StyledFooter>
  )
}

export default Footer
