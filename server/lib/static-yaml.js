const events = Meteor.npmRequire('events')
const fs = Meteor.npmRequire('fs')
const path = Meteor.npmRequire('path')
const walk = Meteor.npmRequire('walkdir')
const yfm = Meteor.npmRequire('yaml-front-matter')

StaticYAML = function(storageCollection, staticRootPath) {
  console.assert(storageCollection)
  console.assert(staticRootPath)

  this.update = function() {
    storageCollection.remove({})
    try {
      scanDir(staticRootPath)
    } catch (error) {
      console.log(error)
    }
  }

  function scanDir(directoryPath) {
    walk.sync(directoryPath, function(itemPath, state) {
      if (path.basename(itemPath)[0] === ".") {
        return
      }

      if (state.isDirectory()) {
        return
      }
      console.assert(state.isFile())
      try {
        let yaml = scanFile(itemPath)
        storageCollection.insert(yaml)
      } catch (error) {
        console.error(error)
        console.log("Scan error " + itemPath)
        throw Error("Scan error " + itemPath)
      }
    })
  }

  function scanFile(filePath) {
    const filename = path.relative(staticRootPath, filePath)
    let yaml = undefined
    try {
      yaml = yfm.loadFront(filePath)
    } catch (error) {
      console.error(error)
      console.log("Bad static file " + filename)
      throw Error("Bad static file " + filename)
    }

    yaml["_id"] = filename
    return yaml
  }
}
