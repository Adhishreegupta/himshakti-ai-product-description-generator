/**
 * Input Component
 *
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-2">

      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        border
        rounded-xl
        p-3
        outline-none
        "
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;