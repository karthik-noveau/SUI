import { DownloadOutlined } from "@ant-design/icons";

import { SUIButton } from "@sui/widgets/button";

import "./button.css";
import styles from "./button.module.css";

export const Button = () => {
  return (
    <div className={styles.container}>
      <SUIButton className="button1">Contact</SUIButton>

      <SUIButton className="button2" loading={true}>
        Submit
      </SUIButton>

      <SUIButton className="button3" icon={<DownloadOutlined />} loading={true}>
        Download
      </SUIButton>
    </div>
  );
};
