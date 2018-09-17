// NODE: READ AND PARSE FILE FROM FILESYSTEM

// const express = require("express");
const fs = require('fs');

const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
// const app = express();

// const array = fs.readFileSync('package.json').toString().split("\n");
// for(let i in array) {
//     console.log(array[i]);
// }

const directoryList = dirs('./');
const find = 'https://bitbucket.org/cognusteam/';
const replace = 'https://git.eu-de.bluemix.net/bluedarwin-team/ember-packages/';

for(let i in directoryList){
  const filePath = `${directoryList[i]}/package.json`;
  try{
    let data = fs.readFileSync(filePath).toString();
    var newValue = data.replace('xxx', 'myString');

    fs.writeFileSync(filePath, newValue);

    console.log('readFileSync complete');
  }catch(ex){
    console.log('ehh ex', filePath);
  }

}



//AJAX
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("file:///C:/your/path/to/file.txt");


// HTML
var input = document.getElementById("myFile");
var output = document.getElementById("output");


input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
    });

    reader.readAsBinaryString(myFile);
  }
});
<input type="file" id="myFile">
<hr>
<textarea style="width:500px;height: 400px" id="output"></textarea>

// NODE
// fs = require('fs');
// fs.readFile(file, [encoding], [callback]);

// file = (string) filepath of the file to read

fs = require('fs')
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
