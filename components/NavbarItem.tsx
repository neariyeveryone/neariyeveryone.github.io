import styles from "../styles/components/navbarItem.module.scss";

type Props = {
  href: string;
  value: string;
};

const NavbarItem = ({ href, value }: Props) => {
  return (
    <a href={href} className={styles.content}>
      {value}
    </a>
  );
};

export default NavbarItem;
