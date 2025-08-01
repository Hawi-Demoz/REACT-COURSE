const products = [
    {title:'cabbage',isFruit:false,id:1},
    {title:'garlic',isFruit:false,id:2},
    {title:'apple',isFruit:true,id:3},
];
export default function shoppingList(){
    const ListItems = products.map(product=>
        <li
          key={product.id}
          style={{
            color:product.isFruit?'magenta' : 'darkgreen'
          }}
        >
          {product.title}
        </li>
    );
    return(
        <ul>{ListItems}</ul>
    );
}
import { useState } from "react";//updating the screen ,you'll wnat the component to remember some information and display it //
function MyButton(){                   
    const[count,setCount]=useState(0)
    function handleClick() {
        setCount(count + 1);

    }
    return(
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
//functions starting with use are called Hooks.