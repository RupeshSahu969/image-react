//  https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY

const API="UpTNmyj3ukvXPt3kiI61Z-bl9J7gpkSGeu4knV8uSik"

import {navbar} from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML= navbar();

import { searchImages } from "../scripts/fetch.js";


let search=(e) => {
    if(e.key === "Enter") {
        let value =document.getElementById("query").value;
        searchImages(API,value).then(data) => {
            console.log(data)

            

        }
        

    }
}
document.getElementById("query").addEventListener("keydown",search);



// let searchImages = async () =>{

//     let value =document.getElementById("query").value

//     try{
//         let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`)
    
//         let data=await res.json();

//         console.log(data)
//     }
//     catch(err) {
//         console.log("err",err);
//     }

// }




















