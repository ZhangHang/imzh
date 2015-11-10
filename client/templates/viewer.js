var totem = ["🐵","🙈","🙉","🙊","🐒"]
Template.viewer.helpers({
  onlineUserCount: function(){
    var onlineUserCount = UserConnections.find({}).count()
    return totem[onlineUserCount % totem.length - 1]
  }
});
