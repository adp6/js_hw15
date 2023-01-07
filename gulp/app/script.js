import {btnTest} from "/module.js"
window.onload = ()=>{
    let btn = document.querySelector('button')
    btn.onclick = ()=>{
        btnTest()
    }
}