const randNumSet = (setLength, max) =>{                 
    if(max < setLength) return "Please pick a number greater than or equal to the length of the list";              
    const numSet = new Set();                           
    while(numSet.size < setLength){
        const i = 1 + Math.floor(Math.random() * max)
        if(!numSet.has(i)) numSet.add(i)
   }
    return(numSet);
};
console.log(randNumSet(10000,10000));