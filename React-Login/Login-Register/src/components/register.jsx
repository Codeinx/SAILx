import { useState } from "react";


const Register = ()=> {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: " "
    })
    

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        
    setUserDetail({
        ...userDetail,
        [name]: value
    })
    }

    function handleSubmit(e){
        e.preventDefault();
        let free = {
            firstName: userDetail.firstName,
            lastName: userDetail.lastName,
            email: userDetail.email,
            password: userDetail.password,
            gender: userDetail.gender,
        } 
        console.log(JSON.stringify(free));
    }

    return (
        <>
        
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="">Firstname: </label>
                    <input type="text" name="firstName" value={userDetail.firstName} placeholder="John" onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Lastname: </label>
                    <input type="text" name="lastName" value={userDetail.lastName} placeholder="Doe" onChange={ handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="email" value={userDetail.email}placeholder="johndoe@domain.com" onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Gender: </label>
                    <select name="gender" id="gender" value={userDetail.gender}onChange={handleChange}>
                        <option value="empty">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password: </label>
                    <input type="password" name="password" value={userDetail.password
                    } placeholder="Password" onChange={handleChange}/>
                </div><br />
                
                <button>Submit</button>

                {/* <h4>
                    Email: {email} <br />
                    Password: {pass}
                </h4> */}
            </form>
        
        </>
    )
 }

 export default Register;