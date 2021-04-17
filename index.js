



let colorCardList =["blue","red","green","purple","yellow"]
let colorTxtList =["black","blue","red","green","purple","yellow"]
let motsList =["noir","bleu","rouge","vert","violet","jaune","marron","rose","salope","merde","putain"]


let body = document.querySelector("body" )
let p = document.querySelector("p")
body.addEventListener("click", coloread)


    function entierAleatoire(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function coloread(e){
        let a = entierAleatoire(0,colorCardList.length-1)
        let b = entierAleatoire(0,colorTxtList.length-1)
        let c = entierAleatoire(0,motsList.length-1)
        if(colorCardList[a]!=colorTxtList[b]){
            body.style.backgroundColor= colorCardList[a]
            if(motsList[c]==="salope" || motsList[c]==="putain" || motsList[c]==="merde"){
                p.style.color= "black"
                p.textContent = motsList[c]
            }
            else{
                p.style.color= colorTxtList[b]
                p.textContent = motsList[c]
            }

        }
        else{
            let a = entierAleatoire(0,colorCardList.length-1)
            let b = entierAleatoire(0,colorTxtList.length-1)
            let c = entierAleatoire(0,motsList.length-1)
            body.style.backgroundColor= "black"
            p.style.color= "white"
            p.textContent = "JOKER"
        }
    }






