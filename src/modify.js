const button = document.getElementById("click-button")
let clickCount = 0;
const clicked = () => {
  clickCount++
  button.dataset.clicks = clickCount
  updateButton()

};

const updateButton = () => {
  if (clickCount === 1) {
    button.textContent = `I've been clicked ${clickCount} time.`
  } else {
    button.textContent = `I've been clicked ${clickCount} times!`
  }
}

const clickCounterHandler = (event) => {
  button.addEventListener('click',clicked)
};


const p = document.getElementById("keydown-tracker")
const handleKeydown = (event) => {
  let letter = event.key.toUpperCase()
  p.textContent = `You pressed Key${letter}`
};

document.body.addEventListener('keydown',handleKeydown);

const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};

const main = () => {
  clickCounterHandler();
  
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
