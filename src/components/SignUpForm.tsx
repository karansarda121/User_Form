// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { calculatePasswordStrength } from "../utils/passwordStrength.ts";
// import Toast from "./Toast.tsx";
// import { useNavigate } from "react-router-dom";


// interface SignUpValues {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   profileImage: File | null;
// }

// const SignUpForm: React.FC = () => {
//   const [showToast, setShowToast] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const initialValues: SignUpValues = {
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     profileImage: null,
//   };

//   // Validation Schema
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, "Name must be at least 3 characters")
//       .required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .matches(
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,}$/,
//         "Invalid email format"
//       )
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), " "], "Passwords must match")
//       .required("Password confirmation is required"),
//     profileImage: Yup.mixed()
//       .nullable()
//       .test("fileSize", "File too large", (value) => {
//         if (value) {
//           return value.size <= 2000000;
//         }
//         return true;
//       })
//       .test("fileType", "Unsupported file format", (value) => {
//         if (value) {
//           return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
//         }
//         return true; // If no file, it's valid
//       }),
//   });

//   const onSubmit = (values: SignUpValues, { resetForm }: any) => {
//     setShowToast("Sign Up Successful!"); // Show toast message
//     setTimeout(() => {
//       setShowToast(null);
//     }, 2000);
//     resetForm();

//     // After successful signup, navigate to login page
//     setTimeout(() => {
//       navigate("/login");
//     }, 1000);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
//       <h1 className="text-2xl font-semibold text-center mb-6">
//         Create an Account
//       </h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//         validateOnBlur={true}
//         validateOnChange={true}
//       >
//         {({ values, setFieldValue }) => (
//           <Form className="space-y-6">
//             <div className="input-group">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <Field
//                 id="name"
//                 name="name"
//                 type="text"
//                 aria-required="true"
//                 aria-describedby="nameError"
//                 className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your full name"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-sm text-red-500"
//                 id="nameError"
//                 role="alert"
//               />
//             </div>

//             <div className="input-group">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email Address
//               </label>
//               <Field
//                 id="email"
//                 name="email"
//                 type="email"
//                 aria-required="true"
//                 aria-describedby="emailError"
//                 className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-sm text-red-500"
//                 id="emailError"
//                 role="alert"
//               />
//             </div>

//             <div className="input-group">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <Field
//                 id="password"
//                 name="password"
//                 type="password"
//                 aria-required="true"
//                 aria-describedby="passwordStrength"
//                 className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Create a password"
//               />
//               {values.password && values.password.trim() !== "" && (
//                 <div
//                   id="passwordStrength"
//                   role="status"
//                   aria-live="polite"
//                   className="text-sm text-gray-500 mt-2"
//                 >
//                   Strength: <b>{calculatePasswordStrength(values.password)}</b>
//                 </div>
//               )}
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="text-sm text-red-500"
//                 role="alert"
//               />
//             </div>

//             <div className="input-group">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <Field
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 aria-required="true"
//                 className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Re-enter your password"
//               />
//               <ErrorMessage
//                 name="confirmPassword"
//                 component="div"
//                 className="text-sm text-red-500"
//                 role="alert"
//               />
//             </div>

//             <div className="input-group">
//               <label
//                 htmlFor="profileImage"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Profile Image (Optional)
//               </label>
//               <input
//                 id="profileImage"
//                 name="profileImage"
//                 type="file"
//                 aria-required="false"
//                 className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={(event) => {
//                   if (event.target.files) {
//                     setFieldValue("profileImage", event.target.files[0]);
//                   }
//                 }}
//               />
//               {values.profileImage && (
//                 <div className="text-sm text-gray-600 mt-2">
//                   <p>Selected file: {values.profileImage.name}</p>
//                 </div>
//               )}
//               <ErrorMessage
//                 name="profileImage"
//                 component="div"
//                 className="text-sm text-red-500"
//                 role="alert"
//               />
//             </div>

//             <button
//               type="submit"
//               aria-label="Submit the form"
//               className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Sign Up
//             </button>
//           </Form>
//         )}
//       </Formik>

//       {showToast && (
//         <Toast message={showToast} onClose={() => setShowToast(null)} />
//       )}
//     </div>
//   );
// };

// export default SignUpForm;


import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { calculatePasswordStrength } from "../utils/passwordStrength.ts";
import Toast from "./Toast.tsx";
import { useNavigate } from "react-router-dom";

interface SignUpValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImage: File | null;
}

const SignUpForm: React.FC = () => {
  const [showToast, setShowToast] = useState<string | null>(null);
  const navigate = useNavigate();

  const initialValues: SignUpValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  };

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), " "], "Passwords must match")
      .required("Password confirmation is required"),
    profileImage: Yup.mixed()
      .nullable()
      .test("fileSize", "File size is too large, maximum is 2MB", (value) => {
        if (value) {
          return value.size <= 2000000; // 2MB
        }
        return true; // If no file is selected, it's valid
      })
      .test("fileType", "Unsupported file format", (value) => {
        if (value) {
          return ["image/jpg", "image/jpeg", "image/png"].includes(value.type);
        }
        return true; // If no file is selected, it's valid
      }),
  });

  const onSubmit = (values: SignUpValues, { resetForm }: any) => {
    setShowToast("Sign Up Successful!"); // Show toast message
    setTimeout(() => {
      setShowToast(null);
    }, 2000);
    resetForm();

    // After successful signup, navigate to login page
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Create an Account
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={true}
        validateOnChange={true}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6">
            <div className="input-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="input-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="input-group">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
              />
              {values.password && values.password.trim() !== "" && (
                <div className="text-sm text-gray-500 mt-2">
                  Strength: <b>{calculatePasswordStrength(values.password)}</b>
                </div>
              )}
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="input-group">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Re-enter your password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="input-group">
              <label
                htmlFor="profileImage"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Image (Optional)
              </label>
              <input
                id="profileImage"
                name="profileImage"
                type="file"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(event) => {
                  if (event.target.files) {
                    setFieldValue("profileImage", event.target.files[0]);
                  }
                }}
              />
              {values.profileImage && (
                <div className="text-sm text-gray-600 mt-2">
                  <p>Selected file: {values.profileImage.name}</p>
                </div>
              )}
              <ErrorMessage
                name="profileImage"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>

      {showToast && (
        <Toast message={showToast} onClose={() => setShowToast(null)} />
      )}
    </div>
  );
};

export default SignUpForm;
