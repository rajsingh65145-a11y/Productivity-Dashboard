const form = document.getElementById("transaction-form")

const textInput = document.getElementById("text")

const amountInput = document.getElementById("amount")

const transactionList = document.getElementById("transaction-list")

const balanceElement = document.getElementById("balance")

let transactions = []  //  ek array ban gaya //

// ADD TRANSACTION
form.addEventListener("submit", (e) => {  // jab jab from submit hoga tab tab ye function chalega //

  e.preventDefault()  // automatic page reload ko rokta hai //

  const text = textInput.value  // jo user input lega //

  const amount = +amountInput.value  //jo user input lega amount (+) ka sign input me liye sting ko number me convert karega  "5000"=>5000//

  const transaction = {
    id: Date.now(),  // current time ke liye ek function type hai jo current time show karega //
    text,  // jo bhi user enter karega ya input lega wo in objects me aake store ho jayega //
    amount // isme amount 
  }

  transactions.push(transaction) // transactions me add ho jayega jo array hai upar  //

  addTransactionDOM(transaction)// DOM matlab ab sab screen pe show hoga //

  updateBalance()  // function call 

  form.reset() // khali  ho jayega //

})

// ADD TO DOM
function addTransactionDOM(transaction){ // function transaction ko add karne ke liye //

  const li = document.createElement("li")  // li naame ke variable me list create karna //

  li.classList.add(
    transaction.amount > 0  // agar transaction ka amount 0 se jyada hua to income na to expence //
    ? "income" // ye list me likha aayega aise <li class="income"></li>
    : "expense"
  )

  li.innerHTML = `
    ${transaction.text}
    <span>
      ₹${transaction.amount}

      <button
        class="delete-btn"
        onclick="removeTransaction(${transaction.id})"
      >
        X
      </button>
    </span>
  `

  transactionList.appendChild(li) // transaction list me add kar dena //

}

// UPDATE BALANCE
function updateBalance(){ // function//

  const amounts = transactions.map(  // amount naam ke variable me ek naya array transaction ka amaount store hoga //
    transaction => transaction.amount
  )

  const total = amounts.reduce( // reduce are used to add //
    (acc, item) => acc + item, // acc =0 rehta hai aur item ka 5000 hai to 0+5000 hoga //
    
  )

  balanceElement.innerText = `₹${total}` // balance ke innerelemet me total show hoga //

}

// REMOVE TRANSACTION
function removeTransaction(id){  // delete button pe run hoga //

  transactions = transactions.filter(  // filter lagaya hai //
    transaction => transaction.id !== id  //  jo id match nhi hoti hai wahi rakho //
  )

  init()  // ui ko refresh karega //

}

// INITIALIZE
function init(){

  transactionList.innerHTML = ""   // khali kar dega //

  transactions.forEach(addTransactionDOM)  //show hoga sab //

  updateBalance()

}