exports.handler = async (event, context, callback) => {
    // console.log(${process.env.GATSBY_PASSWORDS});
    const pwords = process.env.GATSBY_PASSWORDS
    const match = pwords && pwords.split(" ").includes(event.body)

    callback(null, {
        statusCode: 200,
        body: "match: " + pwords + " " + event.formData,
    })
}
