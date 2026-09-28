document.getElementById("fpsubmit").addEventListener("click", ()=>{
    var codestr=document.getElementById("fpcode").value
    var codearr=codestr.split("")
    bfcompiler(codearr)
})


function bfcompiler(code){
    var bfarray=[0];
    var ptr=0
    for (let i=0; i<code.length;i++){
        if (code[i]==">"){
            
            ptr++

            if (ptr>=bfarray.length){
                bfarray.push(0)
            }
        }else if (code[i]=="<"){
            if (ptr!=0){
                ptr--
            }

        }else if (code[i]=="+"){
            bfarray[ptr]++
        }
        else if (code[i]=="-"){
            if (bfarray[ptr]==0){
                bfarray[ptr]=255
            }else{
            bfarray[ptr]--}
        }else if(code[i]=="."){
            console.log(bfarray[ptr])
        }

        else if (code[i]=="["){
            //TODO loop
        }
        else if (code[i]=="]"){
            //TODO loop
        }
    }
    console.log(bfarray)
}