import { Link, useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <p>
        {err.status}: {err.statusText}
      </p>
      <h2>
        <Link to="/">Back to Home</Link>
      </h2>
    </div>
  );
};

export default ErrorComponent;
