import React from "react"
import styled from "styled-components"

const StyledSvg = styled.div`
  position: absolute;
  /* transform: translateY(-33%); */
  width: 100%;
  .cls-1 {
    width: 100%;

    fill: #ee4354;
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
          />
        </svg>
      </svg>
    </StyledSvg>
  )
}

export default Svg
