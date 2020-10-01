exports.handler = async (event, context, callback) => {
    // console.log(${process.env.GATSBY_PASSWORDS});
    const pwords = process.env.GATSBY_PASSWORDS
    const body = Buffer.from(event.body, "base64").toString()
    const match = pwords && pwords.split(" ").includes(body)

    callback(null, {
        statusCode: 200,
        body: "match: " + pwords + " " + body,
        raw: event.body,
    })
}
