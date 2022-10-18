import styles from "../styles/components/project.module.scss";

type Props = {
  title: string;
  tooltip: string;
  href: string;
};

const Project = ({ title, tooltip, href }: Props) => {
  return (
    <>
      <a
        rel="noreferrer"
        href={href}
        target="_blank"
        className={styles.wrapper}
      >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.tooltip}>{tooltip}</p>
      </a>
    </>
  );
};

export default Project;
