import { Link, useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <p>
        {err.status}: {err.statusText}
      </p>
      <Link to="/">
        <button className="px-2 py-1 bg-blue-500 rounded-lg text-white float-right">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorComponent;
