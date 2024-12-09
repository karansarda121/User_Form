# React Login Sign Up Form 

## Tech Stack Used

Frontend: React with TypeScript for a type-safe, component-based architecture, Formik and Yup for form handling and validation, and React Router for navigation. Basic CSS and Tailwind css was used for styling.

Utilities: LocalStorage for storing user preferences (e.g., "Remember Me"), and a custom password strength calculator to enhance UX.

## Features

This project is a React-based Sign-Up form built with TypeScript and Formik for form handling and validation. The form includes advanced features such as password strength indication, file upload with validation, and accessible UI components.

## Login Functionality:
-Login with email and password.
-"Remember Me" option saves email in local storage for future sessions.
-Real-time validation with Formik and Yup.
-Success toast notification upon login.
-Navigation: On successful login, the user is redirected to the Home Page.

## Sign-Up Functionality:
-User registration with fields for name, email, password, confirm password, and optional profile image upload.
-Password strength indicator for better UX.
-Real-time validation for form fields and file upload constraints (e.g., file size and format).
-Success toast notification upon successful sign-up.
-Navigation: On successful sign-up, the user is redirected to the Login Page.


## 1. How to Run the Project

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Steps to Run the Project

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <project-directory>

2.  **Install Dependencies**
npm install

3. npm start

 ## Assumptions
-The user will provide a valid email address format and choose a strong password.
-File uploads are optional but must meet the specified requirements (max size: 2MB, formats: 
  JPEG/PNG).
-The calculatePasswordStrength function uses predefined criteria to determine password strength, 
  which might vary based on the actual security requirements.
