export default function createMetaTags(title, description) {
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    );
  }