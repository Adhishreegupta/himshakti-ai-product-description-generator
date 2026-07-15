import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero-bg1.jpg";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async () => {

    if (
      !user.name ||
      !user.email ||
      !user.password
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      if(name.trim().length < 3){
    setMessage("Name should be at least 3 characters.");
    return;
}

if(!email.includes("@")){
    setMessage("Enter a valid email.");
    return;
}

if(password.length < 6){
    setMessage("Password should contain at least 6 characters.");
    return;
}
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/register",
        user
      );

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    }

    catch (error) {

      if (error.response) {
        setMessage(error.response.data.detail);
      }
      else {
        setMessage("Backend connection failed.");
      }

    }

    setLoading(false);

  };

  return (

    <>
      <Navbar />

      <main>

        <section
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >

          <div className="absolute inset-0 bg-black/60"></div>

          <div
            className="
            relative
            z-10
            flex
            justify-center
            items-center
            pt-32
            pb-20
            "
          >

            <div
              className="
              bg-white/15
              backdrop-blur-xl
              border
              border-white/20
              rounded-[40px]
              p-12
              w-full
              max-w-md
              text-white
              "
            >

              <h1 className="text-4xl font-bold">

                Create Account

              </h1>

              <p className="mt-4 text-gray-200">

                Register to start creating AI product descriptions.

              </p>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
                className="
                w-full
                mt-8
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/20
                outline-none
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                className="
                w-full
                mt-4
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/20
                outline-none
                "
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                className="
                w-full
                mt-4
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/20
                outline-none
                "
              />

              <button
                onClick={handleRegister}
                disabled={loading}
                className="
                w-full
                mt-8
                bg-green-600
                hover:bg-green-700
                rounded-2xl
                p-5
                font-medium
                duration-300
                disabled:bg-gray-500
                "
              >

                {loading ? "Registering..." : "Register"}

              </button>

              {message && (

                <p className="text-center mt-6 text-green-300 font-semibold">

                  {message}

                </p>

              )}

              <p className="text-center mt-8 text-gray-300">

                Already have an account?

                <Link
                  to="/login"
                  className="text-green-400 ml-2 hover:underline"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

}

export default Register;