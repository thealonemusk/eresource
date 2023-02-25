import Head from 'next/head';
import { MAIN_TITLE } from '../lib/constants';

export default function MetaTags() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex" />
      <title>{MAIN_TITLE}</title>
    </Head>
  );
}
