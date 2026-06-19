/**
 * Toast Component
 *
 * Props:
 * message
 */

function Toast({
  message = "Success!",
}) {
  return (
    <div
      className="
      fixed
      top-5
      right-5
      bg-green-600
      text-white
      px-5
      py-3
      rounded-xl
      shadow-lg
      "
    >
      {message}
    </div>
  );
}

export default Toast;