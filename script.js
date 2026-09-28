document.getElementById("fpsubmit").addEventListener("click", ()=>{
    var codestr=document.getElementById("fpcode").value
    var codearr=codestr.split("")
    bfcompiler(codearr)
})


function bfcompiler(code){
    var bfarray=[0];
    var ptr=0
    for (i=0; i<code.length;i++){
        if (code[i]==">"){
            
            ptr++

            if (ptr>i){
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
            if (bfarray[i]==0){
                bfarray[i]=255
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