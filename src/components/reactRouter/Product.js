import  React from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
    let navigate = useNavigate();
    return (
        <div>
         <ul>
             <li>Sprite</li>
             <li>Fanta</li>
             <li>7-up</li>
             <li>Bovonto</li>
             <li>Vibro</li>
         </ul>
         <button onClick = {() => {
             navigate("/home");
         }}> {" "}Go to about page</button>
        </div>
        
    )
}

export default Product;