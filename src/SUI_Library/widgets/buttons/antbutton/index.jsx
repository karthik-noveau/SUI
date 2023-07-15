import { Button } from "antd";

import "./style.css";

export const SUIButton = ({ children, className }) => {
  return (
    <div className={className}>
      <Button type="primary" className="SUIButton">
        {children}
      </Button>
    </div>
  );
};
