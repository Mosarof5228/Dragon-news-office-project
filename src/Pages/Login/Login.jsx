import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const{logIn}=useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    logIn(email,password)
    .then(result=>{
      console.log(result.user)
      form.value.reset()
    })
    .catch(error=>{
      error.message
    })
  };

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <form
        onSubmit={handleLogin}
        className="card-body w-2/3 max-w-md mx-auto shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center">Please Login</h2>
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
          <button className="btn btn-primary">Login</button>
        </div>
        <h2 className="p-4 text-sm ">
          Are You New this site Please{" "}
          <Link className="text-blue-500 font-bold" to="/registration">
            Registration
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
