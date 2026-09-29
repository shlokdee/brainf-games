document.getElementById("fpsubmit").addEventListener("click", ()=>{
    var codestr=document.getElementById("fpcode").value
    var codearr=codestr.split("")
    bfcompiler(codearr)
})

var bfarray=[0];

function bfcompiler(code){
    bfarray=[0]
    document.getElementById("textoutput").textContent=""
    var ptr=0
    var loopsi=-1
    var loopei=-1
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
            if (bfarray[ptr]==256){
                bfarray[ptr]=0
            }
            

        }
        else if (code[i]=="-"){
            if (bfarray[ptr]==0){
                bfarray[ptr]=255
            }else{
            bfarray[ptr]--}
        }else if(code[i]=="."){
            console.log(bfarray[ptr])
            document.getElementById("textoutput").textContent+=String.fromCharCode(bfarray[ptr])
        }

        else if (code[i]=="["){
            loopsi=i
            for (let j=loopsi;j<code.length; j++ ){
                if (code[j]=="]"){
                    loopei=j
                    break;
                }
            }
            if (bfarray[ptr]==0){
                i=loopei
            }
        }
        else if (code[i]=="]"){
            i=loopsi-1
        }
    }
    const visualiser=document.getElementById("visualiser")
    visualiser.replaceChildren(); 
for (let i=0; i<bfarray.length; i++){
    const box=document.createElement("div")
    box.classList.add("box")
    box.innerHTML=`<p>${bfarray[i]}</p>`
    visualiser.appendChild(box)

}
}

