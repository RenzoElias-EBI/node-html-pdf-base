const HTML5ToPDF = require("./lib")
const path = require("path")
 // 1ro actualizar a html5 plugin
 // 2do editar el pdf, para poner encima la imagen QR // drawImage
 // https://www.npmjs.com/package/pdf-lib?activeTab=readme
const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "assets", "basic.html"),
    outputPath: path.join(__dirname, "tmp", "output.pdf"),
    // outputPath: path.join(__dirname, "..", "tmp", "output.pdf"),
    templatePath: path.join(__dirname, "templates", "basic"),
    include: [
      path.join(__dirname, "assets", "basic.css"),
      path.join(__dirname, "assets", "custom-margin.css"),
    ],
  })
 
  await html5ToPDF.start()
  await html5ToPDF.build()
  await html5ToPDF.close()
}
 
(async () => {
  try {
    await run()
    console.log("DONE")
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  } finally {
    process.exit();
  }
})()