import { FC, useEffect } from "react";
import { I_CategoriesProps } from "../type";
import { Button, Title } from "../../../shared";
import { useAppDispatch, useAppSelector } from "../../../packages/redux";
import { selectCategories } from "../../../packages/redux/slices/categoriesStore";
import { getCategories } from "../../../packages/redux/slices/categoriesStore/categoriesThunk";

import styles from "./Categories.module.scss";

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const Categories: FC<I_CategoriesProps> = ({ setCategoryId, className,extraStyle }) => {
  const dispatch = useAppDispatch();
  const { data: categories, isLoading } = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const getCatsByCategory = (categoryId: number) => () => {
    setCategoryId(categoryId);
    console.log(categoryId, "bo");
  };

  if (isLoading) {
    return <div>Loading...</div>; //need add skeleton
  }

  return categories ? (
    <div className={`${styles.wrapper} ${extraStyle}`}>
      <Title content="Categories" />
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={getCatsByCategory(category.id)}
          extraStyle={`${styles.categoryBtn} ${className}`}
          content={capitalizeFirstLetter(category.name)}
        />
      ))}
    </div>
  ) : null;
};

export default Categories;
