
import { Html, Head, Main, NextScript } from 'next/document';
import { Theme } from '@radix-ui/themes';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{ width: '100%', maxWidth: '600px', height: '100vh', margin: 'auto', padding: 0 }}
      >
        <Theme>
          <Main />
        </Theme>
        <NextScript />
      </body>
    </Html>
  );
}
