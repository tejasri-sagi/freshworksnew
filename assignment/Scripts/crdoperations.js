const fs = require("fs");
import * as fs from 'fs';
public read(){
    var key= document.getElementById("keyread")?.value;
    filename= key.concat(".json");
    var loc = '../data/';
    fileloc = loc.concat(filename);
    fs.readFile(fileloc,"utf8",(err,cont)=>{
		if(err){
			document.getElementById("errorMessageRead").innerHTML="No such key exists";
		}else{
            var content = JSON.parse(cont);
            if(content?.life>0){
                var dt = content.date;
                dt.setSeconds( dt.getSeconds() + 10 );
                var dat = new Date();
                if(dat>dt){
                    
                }
            }
			}

});
}