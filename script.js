let progress = document.querySelector(".progress");
let startBtn = document.querySelector(".start-btn");

let startFlag = false;
startBtn.addEventListener("click", () => {
  let percent = 0;
  let timeInterval;
  if (!startFlag) {
    startFlag = true;
    timeInterval = setInterval(() => {
      if (percent < 100) {
        percent += 10;
        progress.innerHTML = percent + "%";
        progress.style.background = "green";
        progress.style.width = percent + "%";
        // backgound color basis on percentage
        if(percent <= 60 && percent >= 30){
            progress.style.backgroundColor="yellow" ;
        }else if(percent < 30){
           progress.style.backgroundColor = "red"
        }else{
            progress.style.backgroundColor = "green"
        }

      }else{
        clearInterval(timeInterval)
        startFlag = false
      }
    }, 1000);
  } else {
    clearInterval(timeInterval);

    startFlag = false;
  }
});
