import React from "react"
import styled from "styled-components"

const StyledSvg = styled.div`
  position: absolute;
  /* transform: translateY(-33%); */
  width: 100%;
  .cls-1 {
    width: 100%;
    fill: #fff;
    /* fill: #ee4354; */
    /* fill: #0f0; */
  }
`

const Svg = () => {
  return (
    <StyledSvg>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 190"
      >
        <defs>
          <style></style>
        </defs>
        <title>123Artboard 1</title>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 190"
          style={{ width: "100%", height: "100%" }}
        >
          <defs></defs>
          <title>1234Artboard 1</title>
          <path
            className="cls-1"
            d="M595.28,51.65S491.4,102.47,369.34,104.16C71.54,108.28,0,169,0,169V58S60.54,33.52,172.63,33.52,316.58,54.67,421,54.67s174.3-21.15,174.3-21.15Z"
          />
          {/* <path
            class="cls-1"
            d="M340.16,
            17.78C224.8-25.2,
            0,
            44.56,
            0,
            44.56V0H510.24S471.94,
            66.89,
            340.16,
            17.78Z"
          /> */}
        </svg>
      </svg>
    </StyledSvg>
  )
}

export default Svg
