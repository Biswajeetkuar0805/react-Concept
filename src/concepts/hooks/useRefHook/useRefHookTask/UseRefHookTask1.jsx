import React, { useRef } from "react";
import "./useRefHook.css";
const UseRefHookTask1 = () => {
    const themeRef=useRef()
       
    const changeTheme=()=>{
        
       themeRef.current.classList.toggle("dark")
       
    }

  return (
    <div className="homepage " ref={themeRef}>
      <button onClick={changeTheme}>bjdjjdj</button>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
        cupiditate labore enim eaque at error corporis quo repellendus ut
        ducimus iste explicabo minus, laborum maxime perferendis saepe molestias
        doloremque. Ipsam eos iste, id consequatur praesentium aperiam
        laudantium deserunt ab repudiandae aspernatur, ad, harum itaque. Id modi
        autem, labore quia ex laudantium, obcaecati exercitationem temporibus
        inventore perferendis ipsam aspernatur vitae. Soluta omnis veritatis
        architecto voluptate perferendis ea amet accusamus aut dolorem obcaecati
        sapiente mollitia, dignissimos necessitatibus voluptatum consectetur
        esse doloremque modi eaque error deleniti veniam quibusdam eius.
        Laudantium quasi animi quia expedita iure laboriosam, reprehenderit
        earum commodi dolor cum minima non sequi quidem, natus omnis saepe!
        Similique laborum ut quam consequuntur dolores nesciunt, quo quos quod,
        quidem minus hic veniam qui rem perferendis molestias adipisci. Non
        omnis fuga nam quisquam numquam, facilis nihil, explicabo error, aliquam
        architecto eaque ea? Reprehenderit facere animi consequatur ullam, vel
        sit, laborum aspernatur suscipit laboriosam eaque voluptates, est
        eligendi. Aliquid labore assumenda dolorum maxime repudiandae accusamus
        deleniti magni. Corrupti ea corporis quam quae exercitationem officiis,
        minus reiciendis consectetur! Blanditiis voluptate dignissimos
        aspernatur iure beatae, quo ea, exercitationem eaque quasi, ex veritatis
        incidunt consequatur dolores! Fuga praesentium porro officia error sed
        quas numquam minima impedit tempora necessitatibus!
      </p>
    </div>
  );
};

export default UseRefHookTask1;
