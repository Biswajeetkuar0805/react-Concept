import { FaBars, FaHome } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Car from '../../assets/car.jpg';
const Icons_Implement=()=>{
    return(
        <div><FaHome size={100} color="purple"/>
        <h1><IoLogoInstagram /></h1>
        <h1><FaBars size={100} color="skyblue" /></h1>

        <img src={Car}/>
        
        </div>
    )
}

export default Icons_Implement