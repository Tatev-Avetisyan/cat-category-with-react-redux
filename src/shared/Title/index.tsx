import { FC } from "react";
import styles from "./title.module.scss";

const Title: FC<{ content: string; extraStyle?: any }> = ({
  content,
  extraStyle,
}) => {
  return (
    <>
      <h2 className={` ${styles.title} ${extraStyle}`}> {content}</h2>
    </>
  );
};

export default Title;
