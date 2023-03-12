 const comutingElement = document.querySelector("#comutingExpence");
// // console.log(comutingElement);

 const foodElement = document.querySelector("#foodExpence");
// // console.log(foodElement);

 const networkElement = document.querySelector("#networkExpence");
// // console.log(networkElement);

 const goodsElement = document.querySelector("#goodsExpence");
// // console.log(goodsElement);

 const rentalElement = document.querySelector("#rentalExpence");
// // console.log(rentalElement);

const someElement = document.querySelector("#someExpence");
// // console.log(rentalElement);

const taxElement = document.querySelector("#taxExpence");

function sum(feeElementList){
    let ans = 0
    for(let i = 0; i < feeElementList.length; i++){
       ans = ans + parseInt(feeElementList[i])
    }
    return ans
}


const buttonElement = document.querySelector("#addFee");


buttonElement.addEventListener("click", () => {

   const ans = sum([comutingElement.value,foodElement.value,networkElement.value,goodsElement.value,rentalElement.value,someElement.value,taxElement.value]);
   console.log(ans);
 let ansElement = document.createElement("p");
 ansElement.innerHTML = ans;
   const feeExpenseElement = document.querySelector("#feeExpense")
   feeExpenseElement.appendChild(ansElement);
   

})


// TODO: make sum function