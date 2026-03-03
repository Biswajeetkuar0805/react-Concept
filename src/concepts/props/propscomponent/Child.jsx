const Child=({data:{name,age,jersyno, specialist, imageUrl,country}})=>{
    //  console.log(props);

    // const {name,age,jersyno, specialist, imageUrl,country}=data


     
    return(
       
        <div>
            <h1 style={{ backgroundColor:"red"}} >{name}</h1>
            <h3>{age}</h3>
            <h4 >{jersyno}</h4>
             <h3>{specialist}</h3>
            <h4 >{imageUrl}</h4>
            <h4 >{country}</h4>
        </div>
    )
}

export default Child