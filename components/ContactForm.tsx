import styles from "../styles/components/contact.module.scss";
import { useLanguage } from "../contexts";
import emailjs from "@emailjs/browser";
import React from "react";

const ContactForm = () => {
  const english = useLanguage();

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bavbcyp",
        "template_il9yvsi",
        "#form",
        "bmfgwPUD85Pz-XTYQ"
      )
      .then(() => {
        window.location.reload();
      });
  }

  return (
    <>
      <form id="form" onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          name="from_name"
          className={styles.input}
          placeholder="Name"
        />
        <input
          placeholder="E-mail"
          className={styles.input}
          size={10}
          type="email"
          name="from_email"
          required
        />
        <textarea
          placeholder={english ? "Message" : "Nachricht"}
          className={`${styles.input} ${styles.textarea}`}
          rows={6}
          required
          name="message"
        />
        <input
          className={`${styles.input} ${styles.submit}`}
          type="submit"
          value={english ? "Send!" : "Senden!"}
        />
      </form>
    </>
  );
};

export default ContactForm;
