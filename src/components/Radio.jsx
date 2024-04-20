import { createContext, useContext } from "react";

const RadioContext = createContext();

export default function Radio({ children, ...props }) {
  const { value, onChange } = useContext(RadioContext);

  return (
    <label
      className={`w-full px-5 py-3 md:py-4 shadow rounded-md cursor-pointer transition-all duration-75
        ${
          value === props.value
            ? "border-2 border-amber-200 shadow-md shadow-gray-300"
            : "hover:shadow-md shadow-gray-300 "
        }
        `}
    >
      <input
        type="radio"
        className="hidden"
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  );
}

export function RadioGroup({ value, onChange, children }) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  );
}
