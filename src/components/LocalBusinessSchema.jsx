import React from 'react';

const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',

    name: 'Straightway Mill',

    description:
      'Local mill offering coconut oil extraction, flour grinding, spice grinding, custom grinding and coconut drying services in Karulai, Kerala.',

    telephone: '+918714348348',

    url: 'https://straightway.zyrox.site/',

    image: 'https://YOUR-DOMAIN.in/og-image.jpg',

    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Pulliyil, Nilambur - Karulai Road',
      addressLocality: 'Vakkeelpadi, Karulai',
      addressRegion: 'Kerala',
      postalCode: '679330',
      addressCountry: 'IN',
    },

    areaServed: [
      'Karulai',
      'Vakkeelpadi',
      'Moothedam',
      'Edakkara',
      'Nilambur',
      'Malappuram',
       'Kerala',
       'Chadhakunu'
    ],

    priceRange: '₹₹',

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default LocalBusinessSchema;