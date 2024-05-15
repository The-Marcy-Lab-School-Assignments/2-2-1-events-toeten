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

////////////////////////////////////

const p = document.getElementById("keydown-tracker")
const handleKeydown = (event) => {
  p.textContent = `You pressed ${event.code}`
};
document.body.addEventListener('keydown', handleKeydown);


/////////////////////////////////////

const notInline = document.getElementById("inline-example");
let clickCountInline = 0;

const clickedInline = () => {
  clickCountInline++
  notInline.setAttribute("data-clicks", clickCountInline)
  updateButtonInline()
};

const updateButtonInline = () => {
  if (clickCountInline === 1) {
    notInline.textContent = `I've been clicked ${clickCountInline} time.`
  } else {
    notInline.textContent = `I've been clicked ${clickCountInline} times!`
  }
}

notInline.addEventListener('click', clickedInline);

///////////////////////////////

const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (event.target.matches('.grid-item') === true) {
    resultSpan.textContent = event.target.textContent;;
  }
};


const addRandom = document.getElementById('add-random-num')
const randomUl = document.getElementById('random-numbers')

const addNewRandomNumber = (event) => {
  const randomNumber = Math.random()
    const listItem = document.createElement("li")
    listItem.textContent = randomNumber
    randomUl.append(listItem)
};
addRandom.addEventListener('click', addNewRandomNumber);


const removeListener = document.getElementById("remove");

removeListener.addEventListener('click', (event) => {
  document.getElementById('delegation').removeEventListener('click', handleDelegation)
});



const main = () => {
  clickCounterHandler();
  
  const delegationContainer = document.querySelector('#delegation')

  delegationContainer.addEventListener('click', handleDelegation);

};

main();
