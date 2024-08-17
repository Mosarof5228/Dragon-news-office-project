import { Link, useLoaderData } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
  const newses = useLoaderData();
  console.log(newses);
  return (
    <div className="r mt-4">
      <Header></Header>
      <div
        className="mt-4 flex  bg-slate-100
      "
      >
        <button className="btn btn-secondary mr-4">Latest</button>
        <Marquee>
          <Link className="mr-8">
            I can be a React component, multiple.........{" "}
          </Link>
          <Link className="mr-8">
            I can be a React component, multiple.........{" "}
          </Link>
          <Link className="mr-8">
            I can be a React component, multiple.........{" "}
          </Link>
        </Marquee>
      </div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-8">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="border md:col-span-2">
          {newses.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
