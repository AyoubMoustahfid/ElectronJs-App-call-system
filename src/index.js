const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require("fs")

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}




const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },


  });
  
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

function save(){
  let name = document.getElementById("name").value;
  // let number = document.getElementById("number").value;
    let path = __dirname + "number.txt"
  
    if(fs.existsSync(path)){
      fs.appendFile(path, name + ";", (err) => {
        const result = err ? err : "new number saved !!";
        console.log(result)
      });
    }else{
      fs.writeFile(path, name + ";", err => {
        if(err) throw err;
        console.log("Number saved !")
      })
    }
    document.querySelector("form").reset();
}


const listContacts = () => {
  let path = __dirname + "number.txt"

  if(path === undefined) {
    console.warn("No file Selected")
    return
  }

  fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
      alert("An error occurred reading the file :" + err.message)
      return
    }

    let contacts = [];

    contacts.push(data);

    console.log("the file content is:" + data);
    console.log(contacts)


    let ul = document.querySelector(".list-group")
     ul.innerHTML = "";
      var html = ``;
    for(var i = 0; i < contacts.toString().split(";").length -1 ; i++){
    html = `
    <li class="list-group-item my-2" style="border-top: 1px solid rgba(0,0,0,.125);">
        <img src="man.png" alt="" width="40px" height="40px">
        ${
        contacts.toString().split(";")[i] 
        }
    </li>
    `
    ul.innerHTML  =  ul.innerHTML + html;
    }

    
    
  })
}



const call = () => {
  let name = document.getElementById("nameCall").value;
  let numbers = document.getElementById("phone").innerText;
  let path = __dirname + "listCall.txt";

  var date = new Date();


  var dateAppel = ("00" + date.getDate()).slice(-2) +
  "/" +
  ("00" + (date.getMonth() + 1)).slice(-2) +
  "/" +
  date.getFullYear() +
  " " +
  ("00" + date.getHours()).slice(-2) +
  ":" +
  ("00" + date.getMinutes()).slice(-2) +
  ":" +
  ("00" + date.getSeconds()).slice(-2);

  if(fs.existsSync(path)){
   if(name == "" && numbers == ""){
     alert('input is required')
     return;
   }else{
    fs.appendFile(path, name + " " + numbers + " " + dateAppel + ";", (err) => {
     
      const result = err ? err : "is Calling"
      console.log(result)
      console.log(name + " " + numbers + " " + dateAppel + ";")
    })
   }
  }else{
    fs.writeFile(path, name + " " + numbers + " " + dateAppel + ";", err => {
      if(err) throw err;
      console.log("Call is Created");
      console.log("is Calling")
    })
  }

  document.querySelector("form").reset();
}

const listAppels = () => {
  let path = __dirname + "listCall.txt"

  if(path === undefined) {
    console.warn("No file Selected")
    return
  }

  fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
      alert("An error occurred reading the file :" + err.message)
      return
    }

    let listCalls = [];

    listCalls.push(data);

    console.log("the file content is:" + data);
    console.log(listCalls)


    let ul = document.querySelector("#list-group")
    ul.innerHTML = "";
    var html = ``;
    
    for(var i = 0; i < listCalls.toString().split(";").length -1 ; i++){
    html = `
    <li class="list-group-item my-2" style="border-top: 1px solid rgba(0,0,0,.125);">
        <img src="telephone.png" alt="" width="40px" height="40px" é>
        ${
        listCalls.toString().split(";")[i] 
        }
    </li>
    
    `
    ul.innerHTML  =  ul.innerHTML + html;
    }

    
    
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
