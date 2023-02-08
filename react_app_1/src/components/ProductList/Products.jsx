import ProductDetails from './ProductDetails';


function Products (props) {

    // React.createElement()

    return(
    //  <h1>All Products</h1>
        <li className="list-group-item m-1 rounded" style={{backgroundColor: props.isAvailable === true ? 'white' : 'lightgray'}}>
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                        <p className="font-italic text-muted mb-0 small">{props.desc}</p>
                        <ProductDetails 
                            isAvailable = {props.isAvailable}
                            price = {props.price}
                        > 
                        <h6 style={{"color": '#D3D3D3' , "fontWeight" : "lighter" , "fontSize" : 15}}>Anything JSX written here is assigned to "props.children"</h6>
                        </ProductDetails>

                </div>
                 <img src={(props.image)} alt="Generic placeholder" className='ml-lg-5 order-1' width="150"/> 

            </div>
        </li>
    )
}

export default Products;