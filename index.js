var pdf = require("pdf-creator-node");
var fs = require("fs");

var html = fs.readFileSync("index.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">PURCHASE ORDER </div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
        Sno: "1",
        Descriptionofmaterial: "FAN",
        Unit: "0",
        Quantity: "2",
        Rate: "20",
        Amount: "40"
    },
    {
        Sno: "2",
        Descriptionofmaterial: "FAN",
        Unit: "0",
        Quantity: "2",
        Rate: "20",
        Amount: "40"
    },
    {
        Sno: "2",
        Descriptionofmaterial: "FAN",
        Unit: "0",
        Quantity: "2",
        Rate: "20",
        Amount: "40"
    }
];

var document = {
    html: html,
    data: {
        users: users,
    },
    // path: "./output.pdf",
    type: "buffer",
};
// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.


pdf.create(document, options).then((res) => {
    // console.log(Object.keys(res));
    const file = fs.read(0, res)
    console.log(file);
}).catch((error) => { console.error(error); });