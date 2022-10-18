import Document, { Head, Html, Main, NextScript } from "next/document";
import emailjs from "@emailjs/browser";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          />
          <script type="text/javascript">
            <>(function(){emailjs.init("bmfgwPUD85Pz-XTYQ")})();</>
          </script>
        </body>
      </Html>
    );
  }
}
