const textract = require('textract');
const fs = require('fs');

textract.fromFileWithPath("/content/doc.docx", ( error, text ) => {
    console.log(text);
})

const files = fs.readdirSync('/content');

//console.log(files);

files.forEach(file => {

    textract.fromFileWithPath('/content/' + file, (err, text) => {
        if (err) {
            console.log(err)
        } else {
            console.log(text);
            fs.writeFileSync('/content/'+file.split('.')[0]+'.txt', text, 'utf-8');
        }
    })
})


