const button = document.getElementById("click-button")
let clickCount = 0;
const clicked = () => {
  clickCount++
  if (clickCount === 1) {
    button.textContent = `I've been clicked ${clickCount} time.`
  } else {
    button.textContent = `I've been clicked ${clickCount} times!`
  }
}

const clickCounterHandler = (event) => {
  button.addEventListener('click',(clicked))
};

const handleKeydown = () => {
};

const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};

const main = () => {
  clickCounterHandler()
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
