import { FC, useEffect } from "react";
import { Button } from "../../shared";
import { I_CatsProps } from "./types";
import { selectCats } from "../../packages/redux/slices/catsStore";
import { useAppDispatch, useAppSelector } from "../../packages/redux";
import { getCats } from "../../packages/redux/slices/catsStore/CatsThunk";

import styles from "./cats.module.scss";

const Cats: FC<I_CatsProps> = ({ page, categoryId, setPage }) => {
  const dispatch = useAppDispatch();
  const { data: cats } = useAppSelector(selectCats);
  console.log(cats, "cats");

  useEffect(() => {
    dispatch(getCats({ page, categoryId }));
  }, [dispatch, page, categoryId]);

  const loadMorePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={styles.catItemWrapper}>
      <div className={styles.innerWrapper}>
        {cats
          ? cats?.map((cat) => (
              <div key={cat.id} className={styles.catItem}>
                <img className={styles.catItem} src={cat.url} alt="cat" />
              </div>
            ))
          : null}
      </div>
      <div className={styles.btn}>
        <Button onClick={loadMorePage} content="Load More Cats" />
      </div>
    </div>
  );
};

export default Cats;
