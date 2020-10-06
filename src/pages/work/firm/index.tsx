import React from "react"
import { graphql } from "gatsby"
import Work from "../../../components/Work"
import sortImgs from "../../../helpers/sortImgs"

type Props = {
    data: any
}

const Firm = ({ data }: Props) => {
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
            // subtitle="React, TypeScript, GraphQL"
            subtitle={`The Firm wanted`}
            title="The Firm"
        />
    )
}
// extension: { regex: "/(jpg)|(jpeg)|(png)/" }

export const query = graphql`
    query FirmImagesQuery {
        allFile(
            filter: {
                extension: { regex: "/jpg/" }
                relativeDirectory: { eq: "firm/img" }
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

export default Firm
