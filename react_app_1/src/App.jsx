import React , { useState } from 'react';
import './App.css';
import CreateProduct from './components/CreateProduct/CreateProduct';
import FilterProduct from './components/FilterProduct/FilterProduct';
import ProductList from './components/ProductList/ProductList';

// let msg = "made in React";

let products = [ // array of products
{
    pID: 1, 
    pName: 'Fresh Milk', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: 'images/fresh-milk.png',
    price: 12
},
{
    pID: 2, 
    pName: 'Cottage Cheese', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image:  'images/cottage-cheese.png',
    price: 10
},
{
    pID: 3, 
    pName: 'Brocoli', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15
},
{
    pID: 4, 
    pName: 'Oranges', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: "images/oranges.png",
    price: 20
},
{
    pID: 5, 
    pName: 'Olive Oil', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14
}
]

function App() {

    let [newProductList, setNewProductList] = useState(products);

    let [filterValueSelected, setFilterValueSelected] = useState('all');

    let filteredProductList = newProductList.filter( (product) => {

        if(filterValueSelected === 'available') {
            return product.isAvailable === true;
        }
        else if (filterValueSelected === 'unavailable') {
            return product.isAvailable === false;
        }
        else {
            return product;
        }
    }

    )

    function createProduct (product) {

        product.pID = newProductList.length + 1;

       // console.log( "calling from app js component ", product)

        setNewProductList([ product ,  ...newProductList ])
       
    }

   

    function onFilterValueSelected (filterValue) {
        // console.log("filtered value from app js " , filterValue)
        setFilterValueSelected(filterValue);
    }

    // const [displayModal, setDisplayModal] = useState(true);
    
    // function displaymodalfunction () {
    //     setDisplayModal(false);
    // }

    return (
       <>
       {/* <PortalComponent displayModal={displayModal} displaymodalfunction={displaymodalfunction}/> */}
       <div className='row'>
         <div className="col-lg-8 mx-auto">
            <CreateProduct createProduct={createProduct}/>
            <FilterProduct onFilterValueSelected={onFilterValueSelected} />
            <ProductList productList = {filteredProductList} filterValue={filterValueSelected}/>
        </div>
       </div>
       </>

    )

    // tradional way of creating an Element
    // const para = document.createElement('p');
    // para.textContent = "this is a demo paragraph";
    // return para ;
}

export default App;