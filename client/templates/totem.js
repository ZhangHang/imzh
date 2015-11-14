Meteor.subscribe('user_status_sessions')
let totem = ["🐵","🙈","🙉","🙊","🐒"]

Template.Totem.helpers({
  totem(){
    let onlineUserCount = UserConnections.find({}).count()
    return totem[onlineUserCount % totem.length]
  }
});
