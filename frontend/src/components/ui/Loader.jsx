/**
 * Loader Component
 */

function Loader() {
  return (
    <div className="flex justify-center">

      <div
        className="
        h-10
        w-10
        rounded-full
        border-4
        border-green-500
        border-t-transparent
        animate-spin
        "
      />

    </div>
  );
}

export default Loader;