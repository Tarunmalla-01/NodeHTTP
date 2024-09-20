const fs=require('fs')

fs.writeFile("test.txt","welcome to node file system",(err,data)=>{
    if(err){
        console.log(err);
        return 
    }
})

console.log("File writing is initiated")
