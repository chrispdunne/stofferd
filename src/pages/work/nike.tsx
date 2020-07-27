import React from "react"
import nike1 from "../../img/nike-1.jpg"
import nike2 from "../../img/nike-2.jpg"
import nike3 from "../../img/nike-3.jpg"
import Work from "../../components/Work"

const Nike = () => {
    return (
        <Work
            images={[nike1, nike2, nike3]}
            subtitle="WordPress, Vanilla JS"
            title="NIKE x LONDON YOUTH GAMES"
        />
    )
}

export default Nike