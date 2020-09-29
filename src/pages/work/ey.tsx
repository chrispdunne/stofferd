import React from "react"
import nike1 from "../../img/nike-1.jpg"
import nike2 from "../../img/nike-2.jpg"
import nike3 from "../../img/nike-3.jpg"
import Work from "../../components/Work"

const Nike = () => {
    return (
        <Work
            images={[
                { src: nike1, caption: "something" },
                { src: nike2 },
                { src: nike3 },
            ]}
            // subtitle="React, TypeScript, GraphQL"
            subtitle={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          \n When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic`}
            title="Ernst &amp; Young"
        />
    )
}

export default Nike
