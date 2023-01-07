let test = 0;
export function btnTest(){
    console.log(test+=1)
}
import {btnTest} from "/module.js"
window.onload = ()=>{
    let btn = document.querySelector('button')
    btn.onclick = ()=>{
        btnTest()
    }
}