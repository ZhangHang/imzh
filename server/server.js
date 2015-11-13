process.env.HTTP_FORWARDED_COUNT = 1

Meteor.publish("user_status_sessions", () => {
  return UserStatus.connections.find()
})

Meteor.publish("posts", () => {
  return Posts.find({})
})
