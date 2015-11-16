process.env.HTTP_FORWARDED_COUNT = 1

const staticRootPath = Meteor.settings.StaticRootPath
if (!staticRootPath) {
  const configureError = new Error("Please set StaticRootPath in your Meteor settings")
  console.error(configureError)
  throw configureError
}

const importer = new YAMLImporter(YAMLs, staticRootPath)

const updateWebHookSecret = Meteor.settings.UpdateWebHookSecret
const updateWebHookSecretKey = Meteor.settings.UpdateWebHookSecretKey
if (!!updateWebHookSecret && !!updateWebHookSecretKey) {
  importer.installWebHook("/webhooks/update", updateWebHookSecretKey,updateWebHookSecret)
}

Meteor.publish("user_status_sessions", () => {
  return UserStatus.connections.find()
})

Meteor.publish("yamls", () => {
  return YAMLs.find({
    published: true
  })
})

importer.update()
