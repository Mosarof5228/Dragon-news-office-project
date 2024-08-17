import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const {userCreate}=useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo, email, password);
    userCreate(email,password)
    .then(result=>{
      console.log(result.user)
      alert("User Created Successfully");
    })
    .catch(error=>{
      console.log(error.message)
    })
    
  };
  return (
    <div className="flex justify-center items-center  min-h-screen">
      <form
        onSubmit={handleRegister}
        className="card-body w-2/3 max-w-md mx-auto shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center">Please Registration...</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
        <h2 className="p-4 text-sm ">
          Already Have an account Please{" "}
          <Link className="text-blue-500 font-bold" to="/login">
            Login
          </Link>
        </h2>
      
      </form>
    </div>
  );
};

export default Register;
