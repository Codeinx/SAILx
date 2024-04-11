import { useState } from "react";


const Register = () => {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "Select"
    })


    function handleChange(e) {
        let name = e.target.name
        let value = e.target.value

        setUserDetail({
            ...userDetail,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        let free = {
            firstName: userDetail.firstName,
            lastName: userDetail.lastName,
            email: userDetail.email,
            password: userDetail.password,
            gender: userDetail.gender,
        }
        console.log(JSON.stringify(free));
        validateForm()
    }

    function validateForm() {
        if (userDetail.firstName.length == 0) {
            alert("Invalid form, First name can not be empty")
            return
        }
        if (userDetail.lastName.length == 0) {
            alert("Invalid form, Last name can not be empty")
            return
        }
        if (userDetail.email.length == 0) {
            alert("Invalid form, Email can not be empty")
            return
        }
        if (userDetail.gender == "Select") {
            alert("Select gender")
            return
        }
        if (userDetail.password.length < 8) {
            alert("Invalid Form, password must contain greater than or equal to 8 characters.")
            return
        }
        let countUpperCase = 0
        let countLowerCase = 0
        let countDigit = 0
        let countSpecialCharacters = 0

        for (let i = 0; i < userDetail.password.length; i++) {
            const specialChars = [
                '!',
                '@',
                '#',
                '$',
                '%',
                '^',
                '&',
                '*',
                '(',
                ')',
                '_',
                '-',
                '+',
                '=',
                '[',
                '{',
                ']',
                '}',
                ':',
                ';',
                '<',
                '>',
            ]

            if (specialChars.includes(userDetail.password[i])) {
                countSpecialCharacters++
            } else if (!isNaN(userDetail.password[i] * 1)) {
                countDigit++
            } else {
                if (userDetail.password[i] == userDetail.password[i].toUpperCase()) {
                    countUpperCase++
                }
                if (userDetail.password[i] == userDetail.password[i].toLowerCase()) {
                    countLowerCase++
                }
            }
        }

        if (countLowerCase == 0) {
            alert('Invalid Form, 0 lower case characters in password')
            return
        }

        if (countUpperCase == 0) {
            alert('Invalid Form, 0 upper case characters in password')
            return
        }

        if (countDigit == 0) {
            alert('Invalid Form, 0 digit characters in password')
            return
        }

        if (countSpecialCharacters == 0) {
            alert('Invalid Form, 0 special characters in password')
            return
        }

        alert('Form is valid')
    }
}

return (
    <>

        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="">Firstname: </label>
                <input type="text" name="firstName" value={userDetail.firstName} placeholder="John" onChange={handleChange} required />
            </div>
            <div className="form-control">
                <label htmlFor="">Lastname: </label>
                <input type="text" name="lastName" value={userDetail.lastName} placeholder="Doe" onChange={handleChange} required />
            </div>
            <div className="form-control">
                <label htmlFor="">Email: </label>
                <input type="email" name="email" value={userDetail.email} placeholder="johndoe@domain.com" onChange={handleChange} required />
            </div>
            <div className="form-control">
                <label htmlFor="">Gender: </label>
                <select name="gender" id="gender" value={userDetail.gender} onChange={handleChange} required>
                    <option value="empty">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Password: </label>
                <input type="password" name="password" value={userDetail.password
                } placeholder="password" onChange={handleChange} required />
            </div><br />

            <button>Submit</button>

            {/* <h4>
                    Email: {email} <br />
                    password: {pass}
                </h4> */}
        </form>

    </>
)


export default Register;