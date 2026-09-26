import { useState } from "react";
import "./App.css";
import Login from "./login";

function App() {
 const [showLogin, setShowLogin] = useState(false);
 if (showLogin) {
  return <Login onBack={() => setShowLogin(false)} />;
}

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          mivora
        </div>

        <div className="nav-links">
          <a href="#">Explore</a>
          <a href="#">How it works</a>
          <a href="#">List your place</a>
        </div>

        <button
         className="login-btn"
         onClick={() => setShowLogin(true)}
        >
          Login
        </button>

      </nav>


      {/* HERO SECTION */}
      <main className="hero">

        <div className="hero-content">

          <h1>
            Find a place
            <br />
            <span>that feels like home.</span>
          </h1>

          <p className="hero-text">
            Discover PGs, rooms, flats and homes near your
            college or workplace, all in one place.
          </p>


          {/* SEARCH BOX */}
          <div className="search-box">

            <div className="location-icon">
              ⌖
            </div>

            <div className="search-content">

              <label>
                Where are you going?
              </label>

              <input
                id="location-input"
                type="text"
                placeholder="Search your college, workplace or city"
              />

            </div>


            <button
              className="search-btn"
              onClick={() => {
                const location =
                  document.getElementById("location-input").value;

                if (!location.trim()) {
                  alert("Please enter a location first.");
                  return;
                }

                setSearchedLocation(location);
              }}
            >
              Find my place
            </button>

          </div>


          {/* QUICK SEARCH */}
          <div className="quick-options">

            <span>
              Popular:
            </span>

            <button
              onClick={() => {
                document.getElementById("location-input").value = "Noida";
              }}
            >
              Noida
            </button>

            <button
              onClick={() => {
                document.getElementById("location-input").value = "Delhi";
              }}
            >
              Delhi
            </button>

            <button
              onClick={() => {
                document.getElementById("location-input").value = "Bangalore";
              }}
            >
              Bangalore
            </button>

            <button
              onClick={() => {
                document.getElementById("location-input").value = "Pune";
              }}
            >
              Pune
            </button>

          </div>

        </div>


        {/* HERO IMAGE */}
        <div className="hero-image">

          <div className="image-overlay">

            <div className="overlay-icon">
              ⌂
            </div>

            <div>

              <strong>
                Find your next home
              </strong>

              <p>
                Closer to what matters.
              </p>

            </div>

          </div>

        </div>

      </main>


      {/* EXPLORE SECTION */}
      <section className="explore-section">

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              Explore your options
            </p>

            <h2>
              Places made for different ways of living.
            </h2>

          </div>

        </div>


        {/* PROPERTY TYPES */}
        <div className="property-types">

          <div className="type-card">

            <div className="type-icon">
              ⌂
            </div>

            <h3>
              PGs
            </h3>

            <p>
              Comfortable stays with everyday essentials.
            </p>

          </div>


          <div className="type-card">

            <div className="type-icon">
              □
            </div>

            <h3>
              Rooms
            </h3>

            <p>
              Private or shared rooms that fit your budget.
            </p>

          </div>


          <div className="type-card">

            <div className="type-icon">
              ⌂
            </div>

            <h3>
              Flats
            </h3>

            <p>
              Find a space you can truly make your own.
            </p>

          </div>


          <div className="type-card">

            <div className="type-icon">
              ♧
            </div>

            <h3>
              Shared Homes
            </h3>

            <p>
              Discover homes and roommates in new cities.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;