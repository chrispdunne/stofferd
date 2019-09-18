import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Svg from "../components/Svg"
import StyledEarth from "../components/StyledEarth"
import StyledMap from "../components/StyledMap"

const StyledSection = styled.div`
  height: 50vh;
  position: relative;
  &.one {
    background: #ee4354;
  }
  &.two {
    background: #123456;
  }
  &.three {
    background: #ee4354;
  }
  .textured,
  .map {
    height: 50vh;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledSection className="one"></StyledSection>
    <StyledSection className="two">
      <Svg />
      hey
    </StyledSection>

    <StyledSection className="three">
      <StyledMap className="map">Hey</StyledMap>
    </StyledSection>
    <StyledSection>
      <StyledEarth className="textured">Hey there heyho</StyledEarth>
    </StyledSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
