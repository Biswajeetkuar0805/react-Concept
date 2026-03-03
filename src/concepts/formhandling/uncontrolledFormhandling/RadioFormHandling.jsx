import React, { useRef } from 'react'

const RadioFormHandling = () => {
    const maleRef=useRef(null)
     const femaleRef=useRef(null)
      const othersRef=useRef(null)

      const handleRadio=(e)=>{
        e.preventDefault();

        const gender=maleRef.current.checked ? "male" :femaleRef.current.checked ? "female":othersRef.current.checked?"others":null;
        console.log(gender)
        
      }
      
  return (
    <>
      <form onSubmit={handleRadio}>
        <label htmlFor="male">
        <input type='radio' value="male"  id="male"name='gender' ref={maleRef}/>Male
        </label>
        <label htmlFor="female">
        <input type='radio'  value="female"  id="female" name='gender' ref={femaleRef} />Female
        </label>
        <label htmlFor="others">
        <input type='radio'  value="others"  id="others" name='gender' ref={othersRef}/>Others
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default RadioFormHandling
