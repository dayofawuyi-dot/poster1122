// component files must be in upper case
import styles from "./Header.module.css"
const Header = ({name,wb}) => {
    // console.log(props) props is an object
    // logics and data are kept at the top
    const appname = "Chopchop FastFood";
    let productCount = 10;
    const rowStyle = {
        minHeight: "200px",
        border: "2px solid red",
        padding: "50px 20px",
        borderRadius: "10px",
        marginTop: "20px",
        color: "white",
        backgroundColor: "orangered"
    }
    return (
        <>
       
            <div className={`row ${styles.myrow}`} style={ rowStyle }>
                 <div className="col-md-12">
                    <h1> {name} </h1>  
                    <h2>Wallet Balance: {wb}</h2>
                    <h4>Total Products: {productCount+1}</h4>
                    <button className="btn btn-warning col-6" onClick={ () =>{
                        alert(`you are welcome to ${appname}`)
                    } }>Click Me</button>
                 </div>
            </div>
       
        </>
    )
}

export default Header;