const fs = require("fs")
const pdf = require("html-pdf")

function testBuildPDF() {
    // qr.toDataURL('https://google.com', function (err, url) {
        var html = fs.readFileSync(`${__dirname}/test.html`, 'utf8');
        // var html = fs.readFileSync(`${__dirname}/app/templates/cert.html`, 'utf8');
        // console.log(url);
        // html = html.replace("{{qrKey}}", url);
        // html = html.replace("{{privKey}}", "Test algorand");
        // console.log(html);
        var options = {}

        pdf.create(html, options).toFile(`${__dirname}/simple.pdf`, function(err, res) {
            if (err) return console.log(err);
        console.log(res);
      });
    // })      
}

testBuildPDF()