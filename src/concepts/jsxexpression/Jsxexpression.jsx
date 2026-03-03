const Jsxexpression=()=>{   
    //jsx expression is used to access the variable or function inside the jsx | html
    // syntax--->{}
    //Note-->inside the jsx expression is not possible to declare a variable but initialization is possible
    
    //How to use js functions || how to call js functions
    
    // if any arrow return any jsx element is known as component but if it not reaturning any jsx element than it is called as js function.

    // react uses synthetic event html,js use normal dom event
    //inside if i want to use any conditional statements  that we need to use ternary operator
    //if i want to use loop then map method 

    let name="Biswa"; 
    let demo=()=>{
        console.log("demo")
    }

    let is_active =true
    if(is_active===true){
        console.log("true block")
    } else {
        console.log("false block")
    }

    let arr=['sundari','sheela']
  
    return (
        <div>
            <h1>Hello {name}</h1>
            {name='Kuar'}
            <br/>
            {name}
            <br/>


            {/* {
                let val=29;
            } */}
         <button onClick={demo}>Click</button>
          {(is_active)?<h1>i am safe</h1>:<h1>i am dead</h1>}

          {
             arr.map((user)=>{
               return <h1>{user}</h1>
             })
          }

          <h1>{arr[0]}</h1>
          <h1>{arr[1]}</h1>
        </div>
    )
}

export default Jsxexpression;
 