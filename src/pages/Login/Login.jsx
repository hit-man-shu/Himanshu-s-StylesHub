import React from "react";
import {
  Form,
  Link,
  json,
  redirect,
  useNavigation,
  useActionData,
} from "react-router-dom";
import Input from "../../UI/Input";
import { toast } from "react-toastify";

const Login = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 px-6 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900">
          Welcome back!
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">
          <Form method="post">
            <Input label="Email" id="email" type="email" />
            <Input label="Password" id="password" type="password" />

            <div className="mb-3 mt-1 text-red-700">
              {data && data.error && <p>{data.error}</p>}
            </div>

            <p className="max-w mt-4 text-center text-sm leading-5 text-blue-500">
              <Link
                to="/signup"
                className="font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-500 focus:underline focus:outline-none"
              >
                create a new acccount
              </Link>
            </p>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="focus:shadow-outline-indigo flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700"
                >
                  {isSubmitting ? "Submitting.." : "Log in"}
                </button>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const action = async ({ request }) => {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 400 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration);

  toast.success("You have logged in successfully!");
  return redirect("/");
};
