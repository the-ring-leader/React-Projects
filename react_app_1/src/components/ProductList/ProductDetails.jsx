import React , {useState} from 'react';
import Button from './Button';

// let isAvailable = "Unavailable";


// let productCount = 1; //This will be common for All Products Since It's A Global Variable


function ProductDetails (props) {

    //let productCount = 1;
    const [productCount, setProductCount] = useState(0);

    let badgeClass = 'mx-5 badge ';
    badgeClass += props.isAvailable === true ? 'bg-success' : 'bg-danger';


    function displayNewProductCount() {

        return productCount > 0 ? productCount : 'Zero';
    }
    
    
    let incrementProductCount = function () {
       
        // productCount++;
        // console.log(productCount);
        setProductCount(productCount + 1);
    }
    
    
    let decrementProductCount = function () {

        // productCount = productCount === 0 ? 0 : --productCount;

        if(productCount > 0) {
            setProductCount(productCount - 1);
        }

        else {
         return
        }

        console.log(productCount);
 
    }

    return (
        <>
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2 p-2" style={{'marginRight' : 30}}>₹ {props.price}</h6>
            <Button onClickEventHandler={decrementProductCount} isDsabled={productCount === 0 ? true : false} productCount={productCount}>-</Button>
            <span className="p-1">{displayNewProductCount()}</span>
            <Button onClickEventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass} style={{fontSize : '15px'}}>{props.isAvailable === true ? 'Available' : 'Unavailable'}</span>
        </div>
        {props.children}
        </>
    )

    // return React.createElement('div' , {className:'d-flex align-items-center justify-content-start mt-1'} , 
    //     React.createElement('h6' , {className:'font-weight-bold my-2 p-2' , style:{marginRight : 30} } , "₹" + props.price),
    //     React.createElement(Button , {} , "-"),
    //     React.createElement('span' ,{style:{padding:'8px 14px' , fontSize : 12}} , displayNewProductCount()),
    //     React.createElement(Button , {} , "+"),
    //     React.createElement('span' , {className : badgeClass} , props.isAvailable ? 'Available' : 'Unavailable')
    
}

export default ProductDetails;