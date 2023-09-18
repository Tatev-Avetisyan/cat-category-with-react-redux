import { useState } from "react";
import Main from "../components/Main";
import { Sidebar } from "../components";


import styles from "./homePage.module.scss";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Sidebar setCategoryId={setCategoryId} />
      <Main
        page={page}
        setPage={setPage}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      />
    </div>
  );
};

export default HomePage;
