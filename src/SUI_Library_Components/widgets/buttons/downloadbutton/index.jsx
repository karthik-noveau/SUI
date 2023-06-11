import React, { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./style.css";

export const SUIDownloadLoadingButton = ({ children, time, className }) => {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[number] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[number] = false;
        return newLoadings;
      });
    }, time);
  };

  return (
    <div className={className}>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        loading={loadings[0]}
        onClick={() => enterLoading(0)}
        className="SUIDownloadLoadingButton"
      >
        {children}
      </Button>
 
    </div>
  );
};
