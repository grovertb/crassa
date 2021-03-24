require('./preConfig')
const fs = require('fs')
const { appSrc, appPublic } = require('./src/paths')
const { colorize } = require('./src/util')

const siteMapJS = appSrc + '/sitemap.js'
const hasSiteMap = fs.existsSync(siteMapJS)

if(hasSiteMap) {
  require(siteMapJS).default(appPublic)
  require('./build')
} else {
  console.log(colorize('You need to create file sitemap.js in src/').FgRed())
}

