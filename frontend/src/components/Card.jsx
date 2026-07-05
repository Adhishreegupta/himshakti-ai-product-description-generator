import { FaRobot, FaSearch, FaPalette } from "react-icons/fa";

function Card({ title }) {

  let icon;
  let description;
  let titleColor;
  switch (title) {

    case "AI Description":
      icon = <FaRobot size={36} className="text-white" />;
      titleColor = "text-emerald-600";
      description =
        "Generate compelling, human-like product descriptions instantly using advanced AI.";
      break;

    case "SEO Optimized":
      icon = <FaSearch size={36} className="text-white" />;
      titleColor = "text-emerald-600";
      description =
        "Improve visibility with keyword-rich content designed for search engines.";
      break;

    case "Tone Selection":
      icon = <FaPalette size={36} className="text-white" />;
      titleColor = "text-emerald-600";
      description =
        "Choose from Luxury, Traditional, Friendly or Modern writing styles.";
      break;

    default:
      icon = "✨";
      description = "";
  }

  return (

    <div
      className="
      bg-white
      rounded-3xl
      shadow-xl
      p-10
      text-center
      hover:-translate-y-2
      hover:shadow-green-300/40
      transition-all
      duration-300
      "
    >

      <div
        className="
        w-20
        h-20
        rounded-full
        bg-gradient-to-br
       from-green-500
       to-emerald-700
       text-white
       shadow-lg
       flex
       items-center
       justify-center
       mx-auto
       mb-6
       "
      >

        {icon}

      </div>

      <h2 className={`text-2xl font-bold ${titleColor}`}>

        {title}

      </h2>

      <p className="text-gray-600 mt-5 leading-7">

        {description}

      </p>

    </div>

  );

}

export default Card;