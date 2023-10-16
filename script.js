console.log("Welcom to tic-tac-toe");

let audioTurn = new Audio("turn.mp3");
let gameover = new Audio("gameover.mp3");
let matchdraw = new Audio("matchdraw.mp3")

let turn = "X";
let isgameover = false;
let winfound=false;
let empty=true;

const changeTurn = () =>{
    return turn === "X" ? "O" : "X";
}

const mediaQuery = window.matchMedia('(max-width: 777px');

const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    if(mediaQuery.matches){
        var wins=[
            [0,1,2,9.5,14,0,34],
            [3,4,5,9.5,32,0,34],
            [6,7,8,9.5,50,0,34],
            [0,3,6,-5,20,90,34],
            [1,4,7,5,20,90,34],
            [2,5,8,15,20,90,34],
            [0,4,8,2,32,45,50],
            [2,4,6,2,32,135,50]
        ]
    }
    else {
        var wins=[
            [0,1,2,5,10,0,20],
            [3,4,5,5,20,0,20],
            [6,7,8,5,30,0,20],
            [0,3,6,-5,20,90,20],
            [1,4,7,5,20,90,20],
            [2,5,8,15,20,90,20],
            [0,4,8,5,20,45,20],
            [2,4,6,5,20,135,20]
        ]
    }
    
    wins.forEach(e=>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !==""){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won ";
            isgameover=true;
            winfound=true;
            gameover.play();
            document.querySelector('.imgbox1').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width=`${e[6]}vw`
        }
        
    })

}

const checkEmpty = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let boxes=[0,1,2,3,4,5,6,7,8]
    for (e in boxes)
    {

        if(boxtext[e].innerText==="")
        {
            empty=true;
            break;
        }
        else{
            empty=false;
        }
    }
    // if(boxtext[0].innerText==="" || boxtext[1].innerText==="" ||boxtext[2].innerText==="" ||boxtext[3].innerText==="" ||boxtext[4].innerText==="" ||boxtext[5].innerText==="" ||boxtext[6].innerText==="" ||boxtext[7].innerText==="" ||boxtext[8].innerText==="")
    // {
    //     empty=true;
    // }
    // else{
    //     empty=false;
    // }
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if (boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            checkEmpty();
            console.log(empty , winfound, isgameover);
            if(!winfound && !empty)
            {
                matchdraw.play();
                document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width="110px";
                document.getElementsByClassName('info')[0].innerText = "Match Draw";
            }
            else if(!isgameover)
            {
                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
            } 
            document.querySelector("#reset").style.display="unset";  
        }
    })
})



reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText="";

    });
    turn = "X";
    empty=true;
    winfound=false;
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText =  turn + " Starts first.";
    document.querySelector('.imgbox1').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector(".line").style.width="0vw"
    document.querySelector("#reset").style.display="none";



})