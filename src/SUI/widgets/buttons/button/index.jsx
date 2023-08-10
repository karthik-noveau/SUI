import { Button } from "antd";

import "./sui.button.css";

export const SUIButton = ({ children, className }) => {
  return (
    <div className={className}>
      <Button type="primary" className="SUIButton">
        {children}
      </Button>
    </div>
  );
};
