import styles from "../styles/scss/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <p>
        created by{" "}
        <a
          href="https://github.com/jorgeguedess"
          target="_blank"
          rel="noreferrer"
        >
          Jorge
        </a>{" "}
        - devChallenges.io
      </p>
    </footer>
  );
};

export default Footer;
