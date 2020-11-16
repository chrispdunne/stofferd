import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Work from "../../../components/Work"
import sortImgs from "../../../helpers/sortImgs"

type Props = {
    data: any
}

const Nike = ({ data }: Props) => {
    // console.log(data)
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
            subtitle={`Ernst & Young wanted a new app to manage R&D collaborative projects with external clients.
            \nThe app allows clients and EY staff to create workspaces, upload, comment on & review documents, manage users and permissions and featured a mobile chat.`}
            title="Ernst &amp; Young"
        />
    )
}
// extension: { regex: "/(jpg)|(jpeg)|(png)/" }

export const query = graphql`
    query ImagesQuery {
        allFile(
            filter: {
                extension: { regex: "/jpg/" }
                relativeDirectory: { eq: "ey/img" }
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
