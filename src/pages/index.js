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
  height: 90vh;
  position: relative;
  /* &.one {
    background: #ee4354;
  }*/
  &.two {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  /* &.three {
    background: #ee4354;
  } */
  .textured,
  .map {
    height: 100vh;
  }
  &.sweet-ovelay {
    background-image: linear-gradient(
      rgba(220, 0, 0, 0.5),
      rgba(200, 150, 0, 0.5)
    );
    background-attachment: fixed;
    position: absolute;
    z-index: 2;
    height: 200vh;
    width: 100%;
  }
`

const IndexPage = () => (
  <Layout>
    <StyledSection className="sweet-ovelay"></StyledSection>

    <SEO title="Home" />

    {/* <StyledSection className="one"></StyledSection> */}

    <StyledSection className="three">
      <StyledMap className="map"></StyledMap>
    </StyledSection>

    <StyledSection className="two">
      <Svg />
    </StyledSection>

    <StyledSection>
      <StyledEarth className="textured"> </StyledEarth>
    </StyledSection>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
