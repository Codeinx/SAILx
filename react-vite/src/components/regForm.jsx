import "./form.css";

function RegForm() {
  return (
    <div class="body">
      <h1>Register</h1>
      <form action="">
        <div class="inputs-wrapper">
          <div class="input-wrap">
            <label htmlFor="">Firstname</label>
            <input id="one" type="text" />
          </div>
          <div class="input-wrap">
            <label htmlFor="">Lastname</label>
            <input id="two" type="text" />
          </div>
        {/* <div class="input-wrap">
              <label htmlFor="">Stack</label>
              <input id="three" type="text" placeholder="" />
            </div>
            <div class="input-wrap">
              <label htmlFor="">Comment</label>
              <textarea
                name=""
                id="four"
                cols="20"
                rows="10"
                placeholder="Write your comment"
              ></textarea>
        </div>  */}
        </div>
        <div className="buttons">
          <button id="" type="submit">
            Login
          </button>
          <button id="" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
    // <div>
    //     <h1>
    //         My First React App
    //     </h1>
    //     <form action="">
    //         <label htmlFor="">Username</label>
    //         <input type="text" /> <br />
    //         <label htmlFor="">Password</label>
    //         <input type="password" />
    //     </form>
    // </div>
  );
}

export default RegForm;
