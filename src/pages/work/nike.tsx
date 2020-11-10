import React from "react"
import nike1 from "../../img/nike-1.jpg"
import nike2 from "../../img/nike-2.jpg"
import nike3 from "../../img/nike-3.jpg"
import Work from "../../components/Work"

const Nike = () => {
    return (
        <Work
            images={[
                { src: nike1, caption: "Homepage full screen video" },
                {
                    src: nike2,
                    caption: "Custom JS results finder & downloader",
                },
                {
                    src: nike3,
                    caption:
                        "threeee mcgee lorem ipsum test fo dolor sit amer twidth of this btch how wid is it gon abe who no",
                },
            ]}
            subtitle={`WordPress, Vanilla JS \n\nWhen Nike came on board to sponsor the prestigious London Youth Games they wanted a complete visual overhaul and custom website built. This was based on their preferred CMS - WordPress - where I built a complete custom theme with bespoke JS functionality for features including a document finder`}
            title="NIKE &amp; LONDON YOUTH GAMES"
        />
    )
}

export default Nike
