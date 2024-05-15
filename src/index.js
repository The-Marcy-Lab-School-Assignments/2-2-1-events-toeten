const button = document.getElementById("add-one")
const number = document.getElementById('results') 
const increment = () => {
  let currentValue = Number(number.textContent)
  number.textContent = currentValue + 1
};


const addOne = (event) => {
  button.addEventListener('click', increment)
}


const main = () => {
  addOne()
}
main()