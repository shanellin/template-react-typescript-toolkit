const path = require("path")
const axios = require("axios")
const fs = require("fs-extra")
const rimraf = require("rimraf")

const writeFile = (filepath, data, opts = "utf8") =>
  new Promise((res, rej) => {
    fs.writeFile(filepath, data, opts, (err) => {
      if (err) rej(err)
      else res()
    })
  })

const modifiers = {
  "*": "other",
  1: "one"
}

const sync = async () => {
  const requestUrl = process.argv[2]
  const { data } = await axios.get(requestUrl)

  const outputFolder = path.resolve(__dirname, "..", "public", "locales")
  rimraf.sync(outputFolder)

  const keys = Object.keys(data)
  for (const item of keys) {
    let keyPath = path.resolve(__dirname, "..", "public", "locales", item)
    fs.ensureDirSync(keyPath)
    await writeFile(path.resolve(keyPath, `common.json`), JSON.stringify(data[item].keys, null, 4))
  }
}

sync()
  .then(() => {
    console.log("Sync Complete")
  })
  .catch(console.log)
