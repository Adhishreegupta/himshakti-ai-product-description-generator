/**
 * Modal Component
 *
 * Props:
 * isOpen
 * onClose
 * title
 * children
 */

function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      justify-center
      items-center
      "
    >

      <div
        className="
        bg-white
        rounded-xl
        p-6
        w-[400px]
        "
      >

        <div className="flex justify-between">

          <h2>
            {title}
          </h2>

          <button onClick={onClose}>
            ✕
          </button>

        </div>

        <div className="mt-5">

          {children}

        </div>

      </div>

    </div>
  );
}

export default Modal;