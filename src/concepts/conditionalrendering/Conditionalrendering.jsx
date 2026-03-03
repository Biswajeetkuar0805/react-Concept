const Conditionalrendering =()=>{
    //what is conditional rendering
 //It helps to render a component or element based on a condition
 
    let value=true
    if(value){
        return(
            <div>
                <h1>Hello</h1>
            </div>
            
        )
    } 
    else {
        return(
          <h1>bye</h1>
        )
    }
}

export default Conditionalrendering