
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
            if ("KeyA" <= e.code && "KeyZ" >= e.code){
                if (col < width){
                    let curTitle = document.getElementById(row.toString() + '-' + col.toString());
                    if (curTitle.innerText === ""){
                        curTitle.innerText = e.code[3];
                        curTitle.classList.add('filled');
                        col++;
                    }
                }
            }
            else if (e.code === "Backspace"){
                if (0 < col && col <= width)
                    col--;

                let curTitle = document.getElementById(row.toString() + '-' + col.toString());
                curTitle.classList.remove('filled');
                curTitle.innerText = "";
            }
            else if (e.code === "Enter"){
                updateBoard();
                row++;
                col=0;
            }

            if (!gameOver && row === height){
                gameOver = true;
                document.getElementById("answer").innerText = word;
            }
        })
    }

    function updateBoard(){
        let correct = 0;
        let checkedletters;
        for (let i = 0; i < width; i++){
            let curTitle = document.getElementById(row.toString() + '-' + i.toString())
            let letter = curTitle.innerText;
            console.log(letter);
            // correct position
            if (word[i] === letter){
                curTitle.classList.add('correct');
                correct++;
            }

            // in the word?
            else if (word.includes(letter)){
                if (word[i] !== letter)
                    curTitle.classList.add('present');
            }
            // not in the word
            else
                curTitle.classList.add('absent');

            if (correct === width) {
                gameOver = true;
                document.getElementById("answer").innerText = "Congrats Lad";
            }
        }
    }


