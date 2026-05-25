export const FormField = ({
  label,
  register,
  name,
  type = "text",
  placeholder,
  options,
}) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm font-medium text-gray-600 ml-1">{label}</label>
    {type === "select" ? (
      <select
        {...register(name, { required: true })}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
      />
    )}
  </div>
);
