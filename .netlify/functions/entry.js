exports.handler = async (event, context, callback) => {
    // console.log(${process.env.GATSBY_PASSWORDS});
    const pwords = process.env.GATSBY_PASSWORDS
    // const body = Buffer.from(event.body, "base64").toString()
    const typed = JSON.parse(event.body.typed)
    const match = pwords && pwords.split(" ").includes(typed)

    callback(null, {
        statusCode: 200,
        body: match,
        // body: "match: " + pwords + " " + body,
        // body: event.body,
    })
}
