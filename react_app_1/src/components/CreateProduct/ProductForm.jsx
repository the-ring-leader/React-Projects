import React , { useState } from 'react';

function ProductForm (props) {

   
    let [pName, setNameInput] = useState('');
    let [pPrice, setPrice] = useState(0);
    let [pAvailability, setAvailability] = useState(false);
    let [pDescription, setdescription] = useState('');
    let [pImageUrl, setImageUrl] = useState('');


    // Another Way Of Setting State....

    // let [userInput , setUserInput] = useState({
    //     nameInput : '',
    //     price : '',
    //     availability : '',
    //     description : '',
    //     imageUrl : ''
    // })

    function nameInputHandler (e) {

     //   console.log(e.target.value);
        setNameInput(e.target.value)

    //    setUserInput({
    //     ...userInput,
    //     nameInput : e.target.value
    //     })

    // A BETTER WAY OF UPDATING THE STATE!!
    // THIS WAY GUARENTEES THAT WE RECIEVE 
    // THE LATEST PREVIOUS STATE SNAPSHOT OF THE OBJECT


        // setUserInput((prevState) => {
        //     return {...prevState , nameInput: e.target.value}
        // })
    }

    function priceInputHandler (e) {
        
     //   console.log(e.target.value);
        setPrice(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     price : e.target.value
        //     })
    }

    function descriptionInputHandler (e) {
        
    //    console.log(e.target.value);
        setdescription(e.target.value);

    //    setUserInput({
    //     ...userInput,
    //     description : e.target.value
    //     })
    }

    function availabilityInputHandler (e) {
        
    //    console.log(e.target.value);
        setAvailability(e.target.value);

    //    setUserInput({
    //     ...userInput,
    //     availability : e.target.value
    //     })
    }

    function imageInputHandler (e) {
        
    //    console.log(e.target.value);
         setImageUrl(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     imageUrl : e.target.value
        //     })
    }

   function onSubmitHandler (e) {
        e.preventDefault(); // to prevent the Default Event

        let product = {
            pName: pName, 
            desc: pDescription,
            isAvailable: Boolean(pAvailability),
            image: pImageUrl,
            price: Number(pPrice)
        }

    //    console.log(product)
        props.onCreateProduct(product);

        //updating the states back to NULL
          setNameInput('');
          setPrice('');
          setAvailability(''); // An empty String is Equivalent to FALSE
          setdescription('');
          setImageUrl('');

    }

    return (
        <div>
         <div className="col-lg-8 mx-auto bg-light p-1" style={{borderTopRightRadius : "10px" , borderTopLeftRadius: "10px"}}>

            <form className="row g-3 p-2" onSubmit={onSubmitHandler}>
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Product Name"
                        value={pName}
                        onChange={nameInputHandler}
                        />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number" 
                        min="0.01" step="0.01" 
                        className="form-control" 
                        id="price" 
                        placeholder="Product Price" 
                        value={pPrice}
                        onChange={priceInputHandler}
                        />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Product Description"
                        value={pDescription}
                         onChange={descriptionInputHandler}
                        />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" value={pAvailability}  onChange={availabilityInputHandler}/>
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" value={pImageUrl} onChange={imageInputHandler}/>
            </div>
            

            <button type="submit" className="btn btn-primary">Add Product</button>
            <button type="button" className="btn btn-danger" onClick={ () => { props.onProductAdded()} }>x</button>
        </form>
        </div>
    </div>

    )
}

export default ProductForm;

