export const  sortArray=(array)=>{
   return array.sort((a, b) => {
        const order = ["Economy", "Standard", "Premium"];
        return order.indexOf(a?.package?.packageName) - order.indexOf(b?.package?.packageName);
    })
}