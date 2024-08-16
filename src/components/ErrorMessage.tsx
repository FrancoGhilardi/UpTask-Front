import React, { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const ErrorMessage: React.FC<Prop> = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-100 text-red-600 font-bold p-3 text-sm">
      {children}
    </div>
  );
};

export default ErrorMessage;
