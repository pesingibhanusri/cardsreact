import { products } from "../Data/data"
 
const productsall=(value,index)=>{
 

    return(
       <>
       <div className="productcard">
       <div><img className="image" src={value.image}></img></div>
       <p>{value.description}</p>
       <strong>{value.price}</strong> </div></>

    )

}


const Cards=()=>{
    
   

    return(

        <>
        
        <div className="productsall">{products.map(productsall)}
            
       </div></>
    )
}
export default Cards