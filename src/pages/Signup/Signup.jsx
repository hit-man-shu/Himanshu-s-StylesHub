import React from "react";
import {
  Form,
  Link,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import Input from "../../UI/Input";

const Signup = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">
            <Form method="POST">
              <Input label="User Name" type="text" id="name" />
              <Input label="User Email" type="email" id="email" />
              <Input label="User Password" type="password" id="password" />

              <div className="mb-3 mt-1 text-red-700">
                {data && data.error && <p>{data.error}</p>}
              </div>

              <p className="max-w mt-2 text-center text-sm leading-5 text-gray-500">
                <Link
                  to="/login"
                  className="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:underline focus:outline-none"
                >
                  login to your account
                </Link>
              </p>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="focus:shadow-outline-indigo flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700"
                  >
                    {isSubmitting ? "Submitting..." : "Create account"}
                  </button>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

export const action = async ({ request }) => {
  const data = await request.formData();

  const authData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  return redirect("/login");
};
