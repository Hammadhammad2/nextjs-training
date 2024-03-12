"use Client";

const TextField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  touched,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`block w-full rounded-md border ${
          touched && error ? "border-red-500" : "border-gray-200"
        } py-2 pl-5 text-sm outline-2 placeholder:text-gray-500`}
      />
      {touched && error && (
        <div id="feedback" className="text-xs py-1 italic text-red-700 pl-5">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;
