import React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  Html,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
  styles: JSX.Element;
  html: string;
  head?: (JSX.Element | null)[] | undefined;
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App: any) => (props: any) => (
          sheet.collectStyles(<App {...props} />)
        ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>

            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ddk6nfu.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
