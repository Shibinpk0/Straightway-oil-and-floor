import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';

import { translations } from '../translations';

const FaqSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q:
        t?.faq?.q1 ||
        'Do you offer home delivery in Karulai and Nilambur?',
      a:
        t?.faq?.a1 ||
        'Yes. Home delivery is available in nearby areas around Vakkeelpadi, Karulai, Edakkara and Nilambur. Distance-based delivery charges may apply.',
    },
    {
      q:
        t?.faq?.q2 ||
        'Can I bring my own grains or coconuts for grinding?',
      a:
        t?.faq?.a2 ||
        'Yes. We provide custom grinding services for suitable grains and coconuts.',
    },
    {
      q:
        t?.faq?.q3 ||
        'Do you accept bulk orders for hotels and events?',
      a:
        t?.faq?.a3 ||
        'Yes. We can handle bulk requirements for hotels, caterers, shops and other businesses. Contact us to discuss your quantity and requirements.',
    },
    {
      q:
        t?.faq?.q4 ||
        'How is your coconut oil processed?',
      a:
        t?.faq?.a4 ||
        'Our coconut processing uses carefully dried coconuts and controlled processing methods to produce fresh coconut oil.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIdx((current) =>
      current === index ? null : index
    );
  };

  const whatsappUrl =
    'https://wa.me/918714348348?text=' +
    encodeURIComponent(
      'Hello Straightway Mill! I have a question.'
    );

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="
        border-b
        border-[#E1D9C9]
        bg-[#F7F3E8]
        py-12
        sm:py-16
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 hidden items-center justify-center gap-3 sm:flex">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#B86F52]/45"
            />

            <span className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#B86F52]
            ">
              {t?.faq?.tag || 'Frequently Asked Questions'}
            </span>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#B86F52]/45"
            />
          </div>

          <h2
            id="faq-heading"
            className="
              font-serif-heading
              text-2xl
              font-bold
              tracking-tight
              text-[#29332B]
              sm:text-3xl
              md:text-4xl
            "
          >
            {t?.faq?.heading ||
              'Got Questions? We Have Answers.'}
          </h2>

          <p className="
            mt-3
            hidden
            text-sm
            leading-6
            text-[#5A635A]
            sm:block
          ">
            {t?.faq?.subtitle ||
              'Common questions about delivery, custom grinding and bulk orders.'}
          </p>
        </div>

        {/* FAQ */}

        <div className="
          mx-auto
          mt-7
          max-w-3xl
          space-y-3
          text-left
          sm:mt-9
        ">
          {faqs.map((item, index) => {
            const isOpen = openIdx === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={item.q}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E1D9C9]
                  bg-[#FFFDF7]
                  shadow-[0_4px_18px_rgba(41,51,43,0.04)]
                "
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    p-4
                    text-left
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-inset
                    focus-visible:ring-[#667A61]
                    sm:p-5
                  "
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle
                      className="
                        h-5
                        w-5
                        shrink-0
                        text-[#B86F52]
                      "
                    />

                    <span className="
                      font-serif-heading
                      text-sm
                      font-bold
                      leading-snug
                      text-[#29332B]
                      sm:text-base
                    ">
                      {item.q}
                    </span>
                  </span>

                  <ChevronDown
                    aria-hidden="true"
                    className={`
                      h-5
                      w-5
                      shrink-0
                      text-[#667A61]
                      transition-transform
                      duration-300
                      ${isOpen ? 'rotate-180' : ''}
                    `}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t
                      border-[#E1D9C9]/70
                      px-5
                      pb-5
                      pt-4
                    "
                  >
                    <p className="
                      text-xs
                      leading-6
                      text-[#5A635A]
                      sm:text-sm
                    ">
                      {item.a}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* WhatsApp CTA */}

        <div className="mt-8 text-center">
          <p className="
            mb-3
            text-xs
            text-[#5A635A]
          ">
            {lang === 'ml'
              ? 'മറ്റ് സംശയങ്ങൾ അറിയാൻ വാട്ട്‌സ്ആപ്പിൽ മെസ്സേജ് ചെയ്യൂ'
              : 'Have another question? Ask us directly on WhatsApp.'}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-10
              items-center
              gap-2
              rounded-full
              bg-[#25D366]
              px-5
              py-2.5
              text-xs
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#20BA5A]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#25D366]
              focus-visible:ring-offset-2
            "
          >
            <MessageCircle className="h-4 w-4" />

            <span>
              {lang === 'ml'
                ? 'സംശയങ്ങൾ ചോദിക്കൂ'
                : 'Ask on WhatsApp'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;