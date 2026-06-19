/**
 * Button Component
 *
 * Props:
 * variant → primary | secondary | outline
 * size → sm | md | lg
 * disabled → true/false
 * onClick → function
 */

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-700 text-white hover:bg-gray-800",
    outline: "border border-green-500 text-green-500",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        rounded-xl
        duration-300
        font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;