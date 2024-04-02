import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Could not find this page!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <div className=" w-full">
      <div className="my-12 text-center text-xl font-bold text-red-700">
        <h1 className="my-12 text-5xl text-black">
          Error occure with status code : {error.status}
        </h1>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
