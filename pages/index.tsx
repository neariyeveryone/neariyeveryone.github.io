import { useLanguage } from "../contexts";
import styles from "../styles/pages/home.module.scss";
import Head from "next/head";
import { ContactForm, Project, Badge, Navbar } from "../components";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const Home = () => {
  const english = useLanguage();

  const birthDate = new Date("02/08/2003");
  const difference = Date.now() - birthDate.getTime();
  const dt = new Date(difference);
  const year = dt.getUTCFullYear();
  const age = Math.abs(year - 1970);

  useEffect(() =>
    document.addEventListener("contextmenu", (event) => event.preventDefault())
  );

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.container} id="about_me">
          <h1 className={styles.title}>{english ? "About Me" : "Über mich"}</h1>
          <div className={styles.text}>
            <p>
              {english
                ? `Hey, My name is Kilian Bennett. I am ${age} years old and have been
              coding since I was 7. I started with Java — I admit not the best
              language to begin with — and since then have made many projects
              that I unfortunately didn't keep track of. Just 4 years ago I
              started with Web Development full time. Worth noticing is that
              both German and English are my first language,`
                : `Hey, Mein name ist Kilian Bennett. Ich bin ${age} jahre alt und
                programmiere seit ich sieben bin. Ich habe mit Java angefangen —
                Ich gebe zu, nicht die beste Sprache um mit dem Programmieren
                anzufangen — und habe seitdem an einigen Projekten gearbeitet an
                denen Ich leider nicht festgehalten habe. Erst seit 4 Jahren
                beschäftige ich mich Vollzeit mit der Web-Entwicklung. Dazu gesagt
                sollte sein, dass sowohl Deutsch als auch Englisch meine
                Erstsprache sind.`}
            </p>
          </div>
        </div>
        <div className={styles.container} id="skills">
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.badges}>
            <Badge image="/skills/html.png" tooltip="HTML" />
            <Badge image="/skills/css.png" tooltip="CSS" />
            <Badge image="/skills/javascript.png" tooltip="JavaScript" />
            <Badge image="/skills/python.svg" tooltip="Python" />
            <Badge image="/skills/java.png" tooltip="Java" />
            <Badge image="/skills/json.png" tooltip="JSON" />
            <Badge image="/skills/sqlite.png" tooltip="SQLite" />
            <Badge image="/skills/cs.svg" tooltip="C#" />
            <Badge image="/skills/github.png" tooltip="Github" />
            <Badge image="/skills/mongo.png" tooltip="MongoDB" />
            <Badge image="/skills/nextjs.png" tooltip="NextJS" />
            <Badge image="/skills/react.png" tooltip="React" />
            <Badge image="/skills/node.png" tooltip="NodeJS" />
            <Badge image="/skills/spigot.png" tooltip="Spigot" />
            <Badge image="/skills/bukkit.png" tooltip="Bukkit" />
            <Badge image="/skills/unity.png" tooltip="Unity" />
            <Badge image="/skills/jda.png" tooltip="JDA" />
            <Badge image="/skills/d4j.svg" tooltip="Discord4j" />
            <Badge image="/skills/typescript.png" tooltip="Typescript" />
            <Badge image="/skills/sass.png" tooltip="Sass/Scss" />
            <Badge image="/skills/forge.jpg" tooltip="Forge" />
            <Badge image="/skills/gradle.png" tooltip="Gradle" />
            <Badge image="/skills/maven.png" tooltip="Maven" />
            <Badge image="/skills/express.png" tooltip="express" />
            <Badge image="/skills/passport.png" tooltip="passport" />
            <Badge image="/skills/angular.png" tooltip="Angular" />
            <Badge image="/skills/docker.png" tooltip="Docker" />
            <Badge image="/skills/trpc.png" tooltip="tRPC" />
            <Badge image="/skills/prisma.png" tooltip="Prisma" />
          </div>
        </div>
        <div className={styles.container} id="projects">
          <h1 className={styles.title}>{english ? "Projects" : "Projekte"}</h1>
          <div className={styles.projects}>
            <Project
              title={english ? "This Page" : "Diese Seite"}
              tooltip={english ? "Click to view" : "Klicken zum Anschauen"}
              href="https://github.com/neariyeveryone/neariyeveryone.github.io"
            />
            <Project
              title="Relity"
              tooltip="Click to view"
              href="https://github.com/Entisy-com/Relity"
            />
            <Project
              title="Hand Recognition Volume Control"
              tooltip="Click to view"
              href="https://github.com/neariyeveryone/HandRecognitionVolumeControl"
            />
          </div>
        </div>
        <div className={styles.container} id="programs">
          <h1 className={styles.title}>{english ? "Programs" : "Programme"}</h1>
          <div className={styles.programs}>
            <Badge image="/programs/intellij.png" tooltip="IntelliJ" />
            <Badge image="/programs/vsc.png" tooltip="Visual Studio Code" />
            <Badge image="/programs/vs.svg" tooltip="Visual Studio" />
            <Badge image="/programs/eclipse.png" tooltip="Eclipse" />
            <Badge image="/programs/figma.png" tooltip="Figma" />
            <Badge image="/programs/pycharm.png" tooltip="Pycharm" />
            <Badge image="/programs/ghd.png" tooltip="Github Desktop" />
            <Badge image="/programs/docker.png" tooltip="Docker Desktop" />
            <Badge image="/programs/notion.png" tooltip="Notion" />
            <Badge image="/programs/adobe.ico" tooltip="Adobe Products" />
            <Badge image="/skills/unity.png" tooltip="Unity" />
            <Badge image="/programs/invision.svg" tooltip="InVision" />
          </div>
        </div>
        <div className={styles.container} id="contact">
          <h1 className={styles.title}>{english ? "Contact Me" : "Kontakt"}</h1>
          <div className={styles.contact}>
            <ContactForm />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_item}>
            <a
              href="https://github.com/neariyeveryone"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/skills/github.png" width={30} height={30} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
