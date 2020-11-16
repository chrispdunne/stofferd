import React from "react"
import { graphql } from "gatsby"
import Work from "../../../components/Work"
import sortImgs from "../../../helpers/sortImgs"

type Props = {
    data: any
}

const Nike = ({ data }: Props) => {
    console.log(data)

    const imgs = sortImgs(data.allFile.edges)

    return (
        <Work
            images={imgs.map((image: any) => {
                return {
                    src: image.node.childImageSharp.fluid.src,
                    caption: image.node.name.slice(3).replace(/-/g, " "),
                }
            })}
            subtitle={`WordPress, Vanilla JS \n\nWhen Nike came on board to sponsor the prestigious London Youth Games they wanted a complete visual overhaul and custom website built. This was based on their preferred CMS - WordPress - where I built a complete custom theme with bespoke JS functionality for features including a document finder`}
            title="NIKE &amp; LONDON YOUTH GAMES"
        />
        // <Work
        //     images={[
        //         { src: nike1, caption: "Homepage full screen video" },
        //         {
        //             src: nike2,
        //             caption: "Custom JS results finder & downloader",
        //         },
        //         {
        //             src: nike3,
        //             caption:
        //                 "threeee mcgee lorem ipsum test fo dolor sit amer twidth of this btch how wid is it gon abe who no",
        //         },
        //     ]}
        //     subtitle={`WordPress, Vanilla JS \n\nWhen Nike came on board to sponsor the prestigious London Youth Games they wanted a complete visual overhaul and custom website built. This was based on their preferred CMS - WordPress - where I built a complete custom theme with bespoke JS functionality for features including a document finder`}
        //     title="NIKE &amp; LONDON YOUTH GAMES"
        // />
    )
}
export const query = graphql`
    query NikeImagesQuery {
        allFile(
            filter: {
                extension: { regex: "/jpg/" }
                relativeDirectory: { eq: "nike/img" }
            }
        ) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        fluid {
                            src
                            base64
                            tracedSVG
                            aspectRatio
                            srcSet
                            srcWebp
                            sizes
                        }
                    }
                }
            }
        }
    }
`

export default Nike
