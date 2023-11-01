const userInterface = {
    "rowBase": document.querySelector("#row-base"),
    "inputCourt": document.querySelector("#nr-courts"),
    "inputNrPlayer": document.querySelector("#nr-players"),
    "inputNrRandomGames": document.querySelector("#nr-random-games"),
    "moveOnBtn": document.querySelector("#mexicano-to-players-btn")
}

function displayPlayerInput(){
    let playerInputs = "";
    for(let i = 1; i <= userInterface.inputNrPlayer.value; i++){
        playerInputs += 
        `<div class="col-md-4 col-12 mt-4">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Spelare${i}</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="player${i}">
            </div>
        </div>
        `;
    }
    console.log(userInterface.rowBase);
    userInterface.rowBase.insertAdjacentHTML("beforeend", playerInputs);
}

userInterface.inputCourt.addEventListener("input", () => {
    if(isNaN(userInterface.inputCourt.value)){
        console.log("Not a number");
        userInterface.inputCourt.value = "";
        return;
    }
    userInterface.inputNrPlayer.value = userInterface.inputCourt.value * 4;
});

userInterface.moveOnBtn.addEventListener("click", () => {
    if(userInterface.inputCourt.value > 0 && userInterface.inputNrRandomGames.value != 0){
        displayPlayerInput();
    }
});