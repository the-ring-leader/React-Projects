import { useState } from 'react';
import ProductForm from './ProductForm';

function CreateProduct (props) {

  const [formDisplay, setformDisplay] = useState(false);

  // handler function
  function onCreateProduct (product) {
     // console.log( "calling from create product component using onCreate() ", product);
      props.createProduct(product);
  }


  function onClickHandler (event) {
      //console.log("create product clicked " , event.target.value);
    
      // if(formStyle.display === 'none'){
      //   setformStyle({
      //     display : "block"
      //   })
      // }

      setformDisplay(true);
  }

  function onProductAdded () {
    setformDisplay(false);
  }

  return (
    <div>
       {!formDisplay && <button className='d-block mx-auto rounded' onClick={onClickHandler}>Create Product</button>}
        {formDisplay && <ProductForm onCreateProduct={onCreateProduct} onProductAdded={onProductAdded} />}
    </div>
  )
}

export default CreateProduct;