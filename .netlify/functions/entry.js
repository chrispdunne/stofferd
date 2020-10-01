exports.handler = async (event, context, callback) => {
    // console.log(${process.env.GATSBY_PASSWORDS});
    callback(null, {
        statusCode: 200,
        body: event.body,
    })
}
