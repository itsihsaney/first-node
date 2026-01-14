// const path = require("path")

// const profilePath = path.join(__dirname , "uploads" )
// console.log(profilePath)
//---------------
// const os = require('os')

// if (os.platform()=== "win32"){
//     console.log("Hello windows user")
// }else if (os.platform()=== "darwin"){
//     console.log("Hello Mac user !")
// }else {
//     console.log("Hello user ")
// }

// console.log(os.totalmem())
// console.log(os.freemem())

//----------
// FILE CREATION

// const fs = require("fs")
// const data = fs.readdir('./' , (err,data)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//=======

// SERVER CREATION

// const http = require('http');

// const server = http.createServer((req , res)=>{
//     if (req.url === "/"){
//         res.write("Your server running on port succesfully")
//     } else if (req.url === "/about"){
//         res.write("You are in About Page Vroh")
//     } else{
//         res.write("Server Noy Found !")
//     }
//     res.end()
// })

// server.listen(3000,()=>{
//     console.log("Your server Running on the Port 3000")
// })

// ============

// File Creation
// const fs = require('fs');

// for (let i = 1 ; i<=10 ; i++){
//     const fileName = `file${i}.txt` ;
//     const content = `This is the File Number ${i} `;

//     fs.writeFile(fileName , content,(err)=>{
//         if (err){
//             console.log(`Error Creating ${fileName}`)
//         }else{
//             console.log(`${fileName} Created `)
//         }
//     })
// }

//==========================
// setTimeout(()=> console.log("This is setTimeout 1"), 1000);
// setTimeout(()=> console.log("This is setTimeout 2"), 500);
// setTimeout(()=> console.log("This is setTimeout 3"), 0);

// setTimeout(()=> console.log("This is setTimeout 1"), 0);
// setTimeout(()=>{
//     console.log("This is SetTimout 2 ");
//     process.nextTick(()=> console.log("inner NextTick3"))
// })
// setTimeout(()=> console.log("This is setTimeout 3"), 0)
// console.log("log1")
// process.nextTick(()=>{
//     console.log("NextTick1");
//     process.nextTick(()=> console.log("NextTick2"))
// });
// process.nextTick(()=> console.log("log5"))
// console.log("log2")

//=============================


// const fs = require('fs');

// fs.readFile(__filename , ()=>{
//     console.log("This is readFile 1")
// })

// process.nextTick(()=> console.log("This is nextTick 1"));
// Promise.resolve().then(()=> console.log("This is Promise 1"))


const fs = require('fs');

setTimeout(()=> console.log("This is SetTimeout 1 "),0)
fs.readFile(__filename , ()=>{
    console.log("This is readFile 1")
})