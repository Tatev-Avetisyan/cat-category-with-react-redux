import { useWindowWidth } from "@react-hook/window-size";

const useWindowResponsive = () => {
  const width = useWindowWidth();

  const isMobile = width < 700;

  return { isMobile };
};
export default useWindowResponsive;
