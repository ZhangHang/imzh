let totem = ["🐵","🙈","🙉","🙊","🐒"]
Template.viewer.helpers({
  totem(){
    let onlineUserCount = UserConnections.find({}).count()
    return totem[onlineUserCount % totem.length]
  }
});
