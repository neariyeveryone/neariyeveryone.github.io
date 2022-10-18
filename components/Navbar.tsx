import styles from "../styles/components/navbar.module.scss";
import NavbarItem from "./NavbarItem";
import { useLanguage } from "../contexts";

const Navbar = () => {
  const english = useLanguage();
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbar_items}>
          <NavbarItem
            href="#about_me"
            value={english ? "About Me" : "Über Mich"}
          />
          <NavbarItem href="#skills" value="Skills" />
          <NavbarItem
            href="#projects"
            value={english ? "Projects" : "Projekte"}
          />
          <NavbarItem
            href="#programs"
            value={english ? "Programs" : "Programme"}
          />
          <NavbarItem href="#contact" value={english ? "Contact" : "Kontakt"} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
