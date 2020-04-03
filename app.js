// # TicTacToe Game
// ## Task 1
// Build a browser game using HTML, CSS and Javascript that allows two human players to play tictactoe.
// **Hints:** 
//      - jQuery will make this easier!
//      - There is a way of turning click events off as well as on for elements
//      - The win combinations could be represented as arrays

window.onload = () => {

    const allDivs = document.querySelectorAll(".tic");
    const result = document.querySelector(".para");
    const reset = document.querySelector(".restart");

    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let symbol = "X";

    console.log(allDivs);
    allDivs.forEach((div) => {
        div.addEventListener("click", (event) => {
            if (div.innerText.length == 0) {
                if (symbol == "X") {
                    symbol = "O";
                } else if (symbol == "O") {
                    symbol = "X";
                }
                div.innerText = symbol;
            }

            checkForWin();
        });
    });

    const checkForWin = () => {
        winCondition.forEach((win) => {
            if (allDivs[win[0]].innerText == allDivs[win[1]].innerText && allDivs[win[1]].innerText == allDivs[win[2]].innerText && allDivs[win[0]].innerText !== "")  {
                result.innerText = `${symbol} wins.`;
                alert(`${symbol} wins`) 
            }
        });
    }

    reset.addEventListener("click", (event) => {
        allDivs.forEach((event) => {
            event.innerText = "";
            result.innerText = "";  
                      
            console.log(event)
        });
    });





    // if ((div[0] == "X" && div[1] == "X" && div[2] == "X")) {
    //     console.log("you win");
    //     section.innerText = "you win";

    // }
    // console.log("you win")


}


