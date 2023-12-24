import { Link } from "react-router-dom";

const NoResultComponent = () => {
  return (
    <>
      <p>No Restaurent open for now!</p>
      <Link to="/">
        <button className="px-2 py-1 bg-blue-500 rounded-lg text-white">
          Back to Home
        </button>
      </Link>
    </>
  );
};

export default NoResultComponent;
