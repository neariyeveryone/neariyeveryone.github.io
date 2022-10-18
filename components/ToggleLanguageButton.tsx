import { useLanguage, useUpdateLanguage } from "../contexts";
import styles from "../styles/components/toggle.module.scss";

export const ToggleLanguageButton = () => {
  const toggleLanguage = useUpdateLanguage();
  const english = useLanguage();
  return (
    <label className={styles.switch}>
      <input checked={!english} type="checkbox" onChange={toggleLanguage} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};
