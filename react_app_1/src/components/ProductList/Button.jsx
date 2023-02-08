

function Button (props) {

    return (
        <>
        <button 
        onClick={props.onClickEventHandler}
        className="btn btn-primary" 
     /* disabled={props.isDisabled}>*/
        disabled= {props.productCount === 0 ? true : false}>
        {props.children} 
        </button>
        </>
    )
}

export default Button;