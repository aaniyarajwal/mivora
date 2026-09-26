import "./login.css";

function Login({ onBack }) {
  return (
    <div className="login-page">

      <div className="login-container">

        {/* Logo */}
        <div className="login-logo">
          mivora
        </div>


        {/* Heading */}
        <div className="login-heading">

          <p className="login-eyebrow">
         
          </p>

          <h1>
            Find your next place.
          </h1>

          <p>
            Log in to continue exploring homes
            that feel like yours.
          </p>

        </div>


        {/* Login Form */}
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login functionality will be connected soon.");
          }}
        >

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>


          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              required
            />

          </div>


          <div className="forgot-password">
            <a href="#">
              Forgot password?
            </a>
          </div>


          <button
            type="submit"
            className="login-submit"
          >
            Login
          </button>

        </form>


        {/* Sign Up */}
        <p className="signup-text">
          Don't have an account?
          <a href="#">
            Sign up
          </a>
        </p>


        {/* Back */}
        <button
          className="back-home"
          onClick={onBack}
        >
          ← Back to home
        </button>

      </div>


      {/* Image Side */}
      <div className="login-image">

        <div className="login-image-overlay">

        </div>

      </div>

    </div>
  );
}

export default Login;