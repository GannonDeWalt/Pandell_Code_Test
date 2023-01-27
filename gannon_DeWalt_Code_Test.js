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



/*
    I'm glad I was able to take the time to really think about this function. 
    This function takes two variables, one for the length of the Set, setlength, and 
    another for the maximum number to be placed in the set, max. This function fails if
    max is less than setLength so i added a simple if statemnt to check and return an
    error message if max is less than setLength. I used a while loop to iterate through
    the Set and place numbers into the Set. I create a const, i, to hold the random number. 
    Math.random() will return a number less than 1 so i had to add * max to make the range 0 to max. 
    Math.floor() will round the random number down to an integer. To get the range from 1 to max, 
    i added 1 to Math.floor(Math.random() * max). Then i needed a way to check the Set to ensure i 
    was not placing a duplicate number. This is why i went with a Set instead of an Array. 
    The time complexity of Array.include() is o(n) while Set.has() is o(1). This will save 
    a lot of time if the function deals with larger numbers. The function finally returns the Set.
*/