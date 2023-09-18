import { FC } from "react";
import Cats from "../Cats";
import { Title } from "../../shared";
import { Categories } from "../Sidebar";
import { I_CatsProps } from "../Cats/types";
import { useWindowResponsive } from "../../hooks";

import styles from "./main.module.scss";

const Main: FC<I_CatsProps> = ({
  categoryId,
  page,
  setPage,
  setCategoryId,
}) => {
  const { isMobile } = useWindowResponsive();

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <div className={styles.innerWrapper}>
          <Categories
            extraStyle={styles.categoryWrapper}
            className={styles.category}
            setCategoryId={setCategoryId}
          />
        </div>
      ) : null}
      <Title extraStyle={styles.title} content="Cats" />
      <Cats
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        setPage={setPage}
        page={page}
      />
    </div>
  );
};

export default Main;
