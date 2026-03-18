const Counter = ({ab}) =>{
    // ab = ab + 10000;  //if a customer depositted 1000 and it's need to be updated, please don't do it like this
    return(
        <div className="container">
            <div className="col-md-12">
            <h1>Account Balance: {ab}</h1>
            </div>
        </div>
    )
}
export default Counter