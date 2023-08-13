import React, { useState } from "react";
import { Button } from "antd";

import "./sui.button.css";

export const SUIButton = ({ children, loading = false, icon, className }) => {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (number) => {
    loading &&
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[number] = true;
        return newLoadings;
      });
  };

  return (
    <Button
      type="primary"
      loading={loadings[0]}
      onClick={() => enterLoading(0)}
      icon={icon}
      className={`SUIButton ${className}`}
    >
      {children}
    </Button>
  );
};
