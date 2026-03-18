import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./style.css"
const App = () => {

 
   const appName = "Chopchop App"; //assume this is coming from an api
   let walletBalance = 1000;
   let isLoggedIn = true;
   const students = ["Yemi", "David", "Scoffield", "Ojule"]

   const products = [
     {id:1, name: "handkerchief", price: 1000},
     {id:2, name: "Detol Soap", price: 3000},
     {id:3, name: "Greek yougort parfait", price: 16000},
     {id:1, name: "Exotic fruit salad", price: 20000}
   ];
 return (
    // jsx
    <div className="container">
        {/* conditional rendering */}
        { isLoggedIn ? <Dashboard/> : <Login/> }
        <h1> {walletBalance} </h1>
       <Header  name ={appName}  wb={walletBalance} /> {/* prop drilling: a way of passing somethig  */}
       <div className="row myrow">
           <Main  products={products}/>
           <Sidebar students={students}/>
       </div>
        <Footer  wb={walletBalance}/>
    </div>
 )

}

export default App;