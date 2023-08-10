import { SUIButton } from "@sui/widgets/buttons/button";

import "./button.css";
import styles from "./button.module.css"

export const NormalButton = () => {
  return (
    <div className={styles.container}>
      <SUIButton>Button</SUIButton>
      <SUIButton className="button1">Button</SUIButton>
      <SUIButton className="button2">Button</SUIButton>
    </div>
  );
};
