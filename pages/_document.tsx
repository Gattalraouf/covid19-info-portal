import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps
} from 'next/document';

type Props = {
  props: DocumentProps;
  locale: string;
};

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    let locale = 'en';

    if (ctx.pathname) {
      const [, lang] = ctx.pathname.split('/');

      if (lang !== '_error' && lang) locale = lang;
    }

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, locale };
  }

  render() {
    console.log(this.props.locale);
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="bg-gray-100 antialiased text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
