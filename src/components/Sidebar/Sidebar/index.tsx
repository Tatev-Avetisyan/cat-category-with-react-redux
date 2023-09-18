import { FC } from "react";
import { Categories } from "..";
import { I_CategoriesProps } from "../type";
import { useWindowResponsive } from "../../../hooks";

import styles from "./sidebar.module.scss";

const Sidebar: FC<I_CategoriesProps> = ({ setCategoryId }) => {
  const { isMobile } = useWindowResponsive();
  console.log(isMobile);

  return (
    <>
      {!isMobile ? (
        <aside className={styles.sidebar}>
          <div className={styles.innerWrapper}>
            <Categories setCategoryId={setCategoryId} />
          </div>
        </aside>
      ) : null}
    </>
  );
};

export default Sidebar;
