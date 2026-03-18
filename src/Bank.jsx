
import Counter from "./bank_components/Counter"
import Atm from "./bank_components/Atm"
import Pos from "./bank_components/Pos"
import Success from "./bank_components/Success"
import Warning from "./bank_components/Warning"
import { useState } from "react"
const Bank = () =>{
    // let accountBalance = 1000; //if acc bal is changing, we should not store it in a varible because when it changes react won't update the dom
    // keep acc bal in state 
    const [accountBalance, setAccountBalance] = useState(1000)
    // a stste to manage user in input amount
      const [amount, setAmount]= useState(0)
    function update_amount(e){
        setAmount(e.target.value)
    }
    return(
        <div className="container">
            <h1>Bank Application: {accountBalance > 1000 ? <Success /> : <Warning/>}</h1>
            <button className="btn btn-danger" onClick={()=>{
                if(amount < accountBalance){
                  setAccountBalance(accountBalance-amount)
                }else{
                    alert("Insufficient funds")
                }
                setAccountBalance(accountBalance-Number(amount))
            }}>Withdraw</button>
           <input type="number" value={amount} onChange={update_amount}/>
            <button className="btn btn-primary" onClick={()=>{
                setAccountBalance(accountBalance+Number(amount))
            }}>Deposit</button>
            <Counter ab={accountBalance}/>
            <Atm ab={accountBalance}/>
            <Pos ab={accountBalance}/>
        </div>
    )
}
export default Bank