
const TernaryRender=()=>{
    let value=true
    let per=90
    let theme='dark'
    return(
       <div>
        {(value)?<h1>Hello</h1>:<h1>Bye</h1>}
        {(per>=90)?<p>A+ grade</p>:(per>=80 && per<90)?<p>A</p>:(per>=70 && per <79)?<p>B grade</p>:<p>Fail</p>}

        <h1 style={(theme==="dark")?{backgroundColor:"red"}:{backgroundColor:"blue"}}>Sunadri</h1>

        <div className={`box ${theme==="dark"?"dark":"light"}`}></div>
       </div>
       
       
    )
}

export default TernaryRender