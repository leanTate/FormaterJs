#! /usr/bin/env node
var colors = require('colors');
let str=process.openStdin();
const init = ()=>{
console.log("  __                            _   _             _".cyan)
console.log(" / _| ___  _ __ _ __ ___   __ _| |_| |_ ___ _ __ (_)  ___".red)
console.log("| |_ / _  | '__| '_ ` _  |/ _` | __| __/ _ | '__|| | / __|".blue)
console.log("|  _| (_) | |  | | | | | | (_| | |_| ||  __/ | _ | |  __   ".green)
console.log("|_|   ___/|_|  |_| |_| |_| __,_| __| __ ___|_|(_)/ / |___/ ".yellow)
console.log("\n")
console.log("<<ingrese el CUIL>>".red)
}

init()
str.addListener("data", (data) => {
    var stra=data.toString()
    if(stra.length>=11){
        for(var i = 0;i<=stra.length;i++){
            stra=stra.replace(/ /g, "")
            if(stra.charAt(i)==="."){
                stra=stra.replace(".","")
            }
            if(stra.charAt(i)==="-"){
                stra=stra.replace("-","")
            }
        }
        // console.clear()
        console.log("formateado para BCRA\n".cyan)
        console.log(stra)
    }else{
        console.log("ingrese un CUIL vailido".bgRed.black)
    }
        
    })

