import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const { title, image_url, author, details, _id } = news;
  console.log(news);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image_url} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="ml-4 font-bold text-blue-500">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
NewsCard.prototypes = {
  news: PropTypes.node,
};
export default NewsCard;
