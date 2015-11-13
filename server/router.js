Router.route("/update/post", {
    where: "server"
  })
  .get(function() {
    this.response.statusCode = 200
    this.response.end("Updating...")
  })
