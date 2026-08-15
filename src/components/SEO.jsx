import React from 'react';

const SITE_URL = 'https://YOUR-DOMAIN.in';

const SEO = ({
  lang = 'en',
  title,
  description,
  path = '/',
}) => {
  const isMalayalam = lang === 'ml';

  const defaultTitle = isMalayalam
    ? 'Straightway Mill | കരുളായി മിൽ'
    : 'Straightway Mill | Coconut Oil, Flour & Spice Grinding in Karulai';

  const defaultDescription = isMalayalam
    ? 'കരുളായിയിലെ Straightway Mill-ൽ ചക്ക് ആട്ടിയ വെളിച്ചെണ്ണ, മാവ്, മസാലപ്പൊടികൾ, കസ്റ്റം ഗ്രൈൻഡിംഗ്, തേങ്ങ ഡ്രൈയിംഗ് സേവനങ്ങൾ ലഭ്യമാണ്.'
    : 'Straightway Mill in Karulai offers fresh coconut oil, stone-ground flour, spice powders, custom grinding and hot-air coconut drying services.';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;

  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <>
      <title>{finalTitle}</title>

      <meta
        name="description"
        content={finalDescription}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={finalTitle}
      />

      <meta
        property="og:description"
        content={finalDescription}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={`${SITE_URL}/og-image.jpg`}
      />

      <meta
        property="og:locale"
        content={isMalayalam ? 'ml_IN' : 'en_IN'}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={finalTitle}
      />

      <meta
        name="twitter:description"
        content={finalDescription}
      />

      <meta
        name="twitter:image"
        content={`${SITE_URL}/og-image.jpg`}
      />

      {/* Language */}

      <link
        rel="alternate"
        hrefLang="en-IN"
        href={`${SITE_URL}/`}
      />

      <link
        rel="alternate"
        hrefLang="ml-IN"
        href={`${SITE_URL}/?lang=ml`}
      />

      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}/`}
      />
    </>
  );
};

export default SEO;