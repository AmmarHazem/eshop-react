import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = ({ size = 24, className }) => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: size,
          }}
          spin
        />
      }
      wrapperClassName={className}
      delay={50}
    />
  );
};

export default Loading;
