import { Section } from 'astro-boilerplate-components';
import { jsx, jsxs } from 'react/jsx-runtime';

const FooterCopyright = () =>
  jsx('div', {
    className: 'border-t border-gray-600 pt-5',
    children: jsxs('div', {
      className: 'text-sm text-gray-200',
      children: [
        '\u00A9 Copyright ',
        new Date().getFullYear(),
        '. Built with \u2665 by',
        ' ',
        jsx('a', {
          className: 'text-cyan-400 hover:underline',
          href: '/',
          target: '_blank',
          rel: 'noopener noreferrer',
          children: 'Fadla',
        }),
        '.',
      ],
    }),
  });

const Footer = () => (
  <Section>
    <FooterCopyright />
  </Section>
);

export { Footer };
