import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "/src/assets/qZone1.png";
import qZone2 from "/src/assets/qZone2.png";
import qZone3 from "/src/assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold mb-4 ">Login With</h2>
        <button className="btn btn-outline w-full ">
          <FaGoogle />
          Goggle Login
        </button>
        <button className="btn btn-outline w-full mt-2">
          <FaGithub />
          Github Login
        </button>
      </div>
      <div>
        <h2 className="font-bold mb-4 ">Find Us On</h2>
        <Link className="flex items-center gap-2 p-2 border rounded-t-lg px-4">
          <FaFacebook></FaFacebook>
          <span> Facebook</span>
        </Link>
        <Link className="flex items-center gap-2 p-2 border-x px-4">
          <FaTwitter></FaTwitter>
          <span> Twitter</span>
        </Link>
        <Link className="flex items-center  gap-2 p-2 border rounded-b-lg px-4">
          <FaInstagram></FaInstagram>
          <span> Instagram</span>
        </Link>
      </div>

      {/* Kids Zone */}
      <div className="bg-slate-100 p-2">
        <h2 className="font-bold mb-4 ">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      {/* text create an amazing */}
      <div className="mt-4 text-justify px-2">
        <h2 className="text-xl font-bold">Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Link to="/">
          <button className="btn btn-active mt-2 w-full">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default RightSideNav;
