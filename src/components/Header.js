import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Text } from '@nextui-org/react'
import { Nav } from '../styles/Nav'


function Header() {

  const navigate = useNavigate()
  
  let path = window.location.pathname.split('/').reverse()[0] === '' ? 'home' : 'projects'

  const [activeTab, setActiveTab] = React.useState(path)

  return (
    <Nav isBordered disableShadow={true} variant={"floating"}>
      <Navbar.Brand>
        <Text b css={{m: 0}}>
          Mohit Kwatra
        </Text>
      </Navbar.Brand>
      
      <Navbar.Content>
        <Navbar.Link isActive={activeTab === 'home'} onClick={() => { setActiveTab('home'); navigate('/') }}>
          Home
        </Navbar.Link>
        <Navbar.Link isActive={ activeTab === 'projects' } onClick={() => { setActiveTab('projects'); navigate('/projects') }}>
          Projects
        </Navbar.Link>
      </Navbar.Content>
    </Nav>
  )
}

export default Header
