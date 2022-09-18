import React from "react";
import classnames from "classnames";

interface InputGroupProps {
  className?: string; //className이 props로 들어올수도 안들어올수도 있다는 옵션
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void; //string을 인자로 받고 리턴값은 void로 받는다
}

const InputGroup: React.FC<InputGroupProps> = ({
  className = "mb-2", //만약에 className이 안들어오면 default 값은 mb-2
  type = "text",
  placeholder = "",
  error,
  value,
  setValue,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        style={{ minWidth: 300 }}
        className={classnames(
          `w-full p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white hover:bg-white`,
          { "border-red-500": error } //error가 true이면 red로 변함
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <small className="font-medium text-red-500">{error}</small>
    </div>
  );
};

export default InputGroup;
