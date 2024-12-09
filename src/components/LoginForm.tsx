import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast.tsx";

const LoginForm: React.FC = () => {
  const [showToast, setShowToast] = useState<string | null>(null);
  const [storedEmail, setStoredEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // To handle initial loading state
  const navigate = useNavigate();

  // Check localStorage for saved email
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setStoredEmail(savedEmail);
    }
    setIsLoading(false);
  }, []);

  // Validation Schema for the Login form
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Form submission handler
  const onSubmit = (values: any, { resetForm }: any) => {
    if (values.rememberMe) {
      localStorage.setItem("email", values.email);
      localStorage.setItem("logged", "true");
    } else {
      localStorage.removeItem("email");
      localStorage.setItem("logged", "true");
    }

    // Toast for successful login
    setShowToast("Login Successful!");
    setTimeout(() => {
      setShowToast(null); // Hide toast after 2 seconds
    }, 2000);

    // Redirect to home after 1 second
    setTimeout(() => {
      navigate("/home");
    }, 1000);

    resetForm();
  };

  // Navigate to Sign Up page
  const handleNavigateToSignUp = () => {
    navigate("/signup");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        Login to Your Account
      </h1>
      <Formik
        initialValues={{
          email: storedEmail || "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-2"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-2"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <Field
                type="checkbox"
                name="rememberMe"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-700"
              >
                Remember Me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>

      {/* Toast Success Message */}
      {showToast && (
        <Toast message={showToast} onClose={() => setShowToast(null)} />
      )}

      {/* Sign Up Redirect Link */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={handleNavigateToSignUp}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
