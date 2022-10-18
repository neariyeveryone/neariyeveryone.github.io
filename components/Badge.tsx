import styles from "../styles/components/badge.module.scss";
import Image from "next/image";

type Props = {
  image: string;
  tooltip: string;
};

const Badge = ({ image, tooltip }: Props) => {
  return (
    <div className={styles.content}>
      <Image
        className={styles.image}
        src={image}
        width={50}
        height={50}
        alt=""
      />
      <p className={styles.tooltip}>{tooltip}</p>
    </div>
  );
};

export default Badge;
