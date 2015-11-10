if (Meteor.isClient) {
  Meteor.subscribe('userPresence')
}
userPresence = new Mongo.Collection("userPresence")
