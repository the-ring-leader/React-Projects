
import Products from './Products';



const ProductList = ( props ) => {

    if(props.productList.length === 0) {
        return (
            <div className='col-lg-8 mx-auto pt-4'>
              <img src={process.env.PUBLIC_URL + "/empty-cart.png"}  alt="empty-cart image" className='mx-auto d-block'/>
            </div>
        )
     }
    
    else {
     return (
        <>
         <div className='row'>
            <div className='col-lg-8 mx-auto'>
            {/* <h2 className="header-1">This is an App Component {msg+`.`}</h2>
            <h2>It's a header</h2>
            <h2>JSX follows XML Rules</h2> */}

            <ul className="list-group shadow">
            
                {
                    props.productList.map((product) => {
                    return  <Products 
                    key={product?.pName} 
                    name = {product?.pName} 
                    desc = {product?.desc}
                    isAvailable = {product?.isAvailable}
                    image={product?.image} 
                    price = {product?.price}
                    />
                 } )
                }

            </ul>

        </div>
     </div>
    </>
  )
}
}

export default ProductList;