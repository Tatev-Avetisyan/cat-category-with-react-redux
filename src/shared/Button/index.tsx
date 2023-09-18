import { FC } from "react";
import styles from "./button.module.scss";

interface ButtonType {
  content: string;
  extraStyle?: any;
  onClick?: any;
}

const Button: FC<ButtonType> = ({ content, extraStyle, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${extraStyle}`}>
      {content}
    </button>
  );
};

export default Button;
