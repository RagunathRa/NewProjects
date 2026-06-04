import React from 'react'

const Quiz = () => {


    const array = [2,3,4,5,4,6,7,8,8,11,4,5,5,6,5,12];

    function arrDuplicate(arr) {
        const res = [];
        for(let i = 0; i < arr.length; i++){
            for(let j = i +1; j < arr.length ; j++){
                if(arr[i] === arr[j]){
                   
                      if(!res.includes(arr[i])){
                          res.push(arr[i])
                      }
                }
                
            }
           
        }
     return res;
    }
  console.log(arrDuplicate(array),"-------arrDuplicate");
  
  

  return (
    <div>
      test duplicate from the array
      <button > btn click</button>
    </div>
  )
}

export default Quiz
