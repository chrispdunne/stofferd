exports.handler = async (event, context, callback) => {
    const pwords = process.env.GATSBY_PASSWORDS
    const body = JSON.parse(event.body)
    const match = pwords && pwords.split(" ").includes(body.typed)

    callback(null, {
        statusCode: 200,
        body: "" + match,
    })
}
