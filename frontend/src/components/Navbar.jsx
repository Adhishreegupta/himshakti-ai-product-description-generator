import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [loggedIn, setLoggedIn] = useState(false);
const [userName, setUserName] = useState("");

  // Theme
  useEffect(() => {

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );

  }, [dark]);

  // Check login whenever route changes
  useEffect(() => {

    const token = localStorage.getItem("token");
     setUserName(
  localStorage.getItem("userName") || ""
);
    setLoggedIn(!!token);

  }, [location]);

  const logout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userPhoto");

  setLoggedIn(false);

  navigate("/login");

};

  return (

    <nav className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-8 py-6">

        <div className="flex justify-between items-center">

          <Link
            to="/"
            className="text-3xl font-bold text-white"
          >
            CopyKart AI
          </Link>

          <div className="flex items-center gap-8">

            <div className="hidden md:flex gap-10 text-white font-medium items-center">

              <Link to="/">Home</Link>

              <Link to="/about">About</Link>

              {loggedIn ? (
                <>
                  <Link to="/dashboard">
                    Dashboard
                  </Link>

                  <Link to="/create-product">
                    Create Product
                  </Link>
                  {userName && (

<span className="text-green-300">

Hi, {userName}

</span>

)}
                  <button
                    onClick={logout}
                    className="hover:text-red-400 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    Login
                  </Link>

                  <Link to="/register">
                    Register
                  </Link>
                </>
              )}

            </div>

            <button
              onClick={() => setDark(!dark)}
              className="
              bg-green-600
              hover:bg-green-700
              text-white
              px-4
              py-2
              rounded-lg
              duration-300
              "
            >
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>

          </div>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;