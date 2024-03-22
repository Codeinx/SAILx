 import { useState } from "react"
 
 
 
 
 
 
 const Forms = ()=> {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleMail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(email, pass);
    }

    return (
        <>
        
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="email" placeholder="johndoe@domain.com" onChange={handleMail}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password: </label>
                    <input type="password" name="pass" placeholder="Password" onChange={handlePass}/>
                </div> <br />
                
                <button>Submit</button>

                <h4>
                    Email: {email} <br />
                    Password: {pass}
                </h4>
            </form>
        
        </>
    )
 }

 export default Forms;