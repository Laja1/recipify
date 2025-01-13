import { textfieldProps } from "../types";

export const Textfield = ({ label,placeholdertext }: textfieldProps) => {
  return (
    <div>
      {label && <label className="">{label}</label>}
          <input
              className=""
          placeholder={placeholdertext}
          />
    </div>
  );
};
