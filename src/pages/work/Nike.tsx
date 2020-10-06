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
            subtitle="WordPress, Vanilla JS"
            title="NIKE x LONDON YOUTH GAMES"
        />
    )
}

export default Nike
