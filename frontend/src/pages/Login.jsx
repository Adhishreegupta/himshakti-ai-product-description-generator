import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero-bg1.jpg";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { toast } from "react-toastify";
function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {

    if (!email.trim()) {
    setMessage("Email is required.");
    return;
}

if (!email.includes("@")) {
    setMessage("Enter a valid email.");
    return;
}

if (password.length < 6) {
    setMessage("Password should contain at least 6 characters.");
    return;
}

    setLoading(true);
    setMessage("");

    try {

      const formData = new URLSearchParams();

formData.append("username", email);
formData.append("password", password);

const response = await axios.post(
  "http://127.0.0.1:8000/auth/login",
  formData,
  {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {

      console.log(error);

      if (error.response) {
        toast.error(error.response.data.detail);
      } else {
        toast.errore("Unable to connect to backend.");
      }

    }

    setLoading(false);

  };
  const handleGoogleLogin = async () => {

  try {

    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    const user = result.user;

    localStorage.setItem("token", "google-user");

    localStorage.setItem(
      "userName",
      user.displayName
    );

    localStorage.setItem(
      "userEmail",
      user.email
    );

    localStorage.setItem(
      "userPhoto",
      user.photoURL
    );

    navigate("/dashboard");

  }

  catch (error) {

    console.log(error);

    alert("Google Login Failed");

  }

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
                Welcome Back
              </h1>

              <p className="mt-4 text-gray-200">
                Continue creating high-converting listings.
              </p>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleLogin}
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
                {loading ? "Logging in..." : "Login"}
              </button>
              <div className="flex items-center my-6">

  <div className="flex-1 h-px bg-white/20"></div>

  <span className="px-4 text-gray-300">
    OR
  </span>

  <div className="flex-1 h-px bg-white/20"></div>

</div>

<button
  onClick={handleGoogleLogin}
  className="
  w-full
  bg-white
  text-gray-800
  hover:bg-gray-100
  rounded-2xl
  p-5
  font-semibold
  flex
  justify-center
  items-center
  gap-3
  transition
  "
>

  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="w-6 h-6"
  />

  Continue with Google

</button>
              {message && (

                <p className="text-center mt-6 text-green-300 font-semibold">
                  {message}
                </p>

              )}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

}

export default Login;