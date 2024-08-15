import logo from "/src/assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl font-semibold">
        {moment().format("dddd, MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default Header;
