import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log(info);
  }

  render() {

    if (this.state.hasError) {

      return (

        <div className="min-h-screen flex justify-center items-center bg-black text-white">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-red-500">
              Something went wrong
            </h1>

            <p className="mt-6 text-gray-300">
              Please refresh the page.
            </p>

          </div>

        </div>

      );

    }

    return this.props.children;
  }

}

export default ErrorBoundary;