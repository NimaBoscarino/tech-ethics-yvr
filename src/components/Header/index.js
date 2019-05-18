import React from "react"

import { Container, Logo } from "./styles"
import Nav from "../Nav"
import Search from "../Search"

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = ({ site, transparent }) => (
  <Container transparent={transparent}>
    <Logo to="/" title={site.title} rel="home" />
    <Nav />
    <Search collapse indices={searchIndices} />
  </Container>
)

export default Header
