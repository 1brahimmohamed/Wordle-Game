
    let height = 6,     // number of attempts
        width = 5,      // word length
        row = 0,    // current attempt
        col = 0,    // current letter for that attempt
        gameOver = false,
        word = "SQUID";

    window.onload = _ => {
        initialize();
    }

    function initialize(){
        createGameBoard();
        keyListener();
    }

    function createGameBoard(){
        for (let i = 0; i < height; i++){
            for (let j = 0; j < width; j++){
                let title = document.createElement("span");
                title.id = i.toString() + "-" + j.toString();
                title.classList.add("title");
                title.innerText = "";
                document.getElementById("board").appendChild(title);
            }
        }
    }

    function keyListener(){
        document.addEventListener("keyup", (e)=>{
            if (gameOver)
                return;
            if ("KeyA" <= e.code && "KeyZ"){
                if (col < width){
                    let curTitle = document.getElementById(row.toString() + '-' + col.toString());
                    if (curTitle.innerText === ""){
                        curTitle.innerText = e.code[3];
                        col++;
                    }
                }
            }
            else if (e.code === "Backspace"){
                if (0 < col && col <= width)
                    col--;

                let curTitle = document.getElementById(row.toString() + '-' + col.toString())
                curTitle.innerText = "";
            }
        })
    }

