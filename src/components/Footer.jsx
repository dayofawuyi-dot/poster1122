
const Footer = (props) => {
    // props.wb = 5000 props cannot be changed or mutated by a child component
    return(
        <div className="row">
            <div className="col-md-12">
            <h1>Footer</h1>
            <h3>Your wallet balance is: {props.wb}</h3>
        </div>
        </div>
    )
}

export default Footer;