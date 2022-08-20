import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

// Hello! My name is Muhamad Rijal, you can call me Rijal, Euxzy, CicakUngu or whatever you want. I'm a Front-end Developer and a Network Engineer located in West Java, Indonesia. As a Front-end Develover I used to code websites from stratch. I love to create simple yet beautiful websites with great user experience.
const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Fadla</GradientText> 👋
        </>
      }
      description={
        <>
          Hello! My name is <GradientText>Muhamad Zidna Fadla</GradientText>,
          You can call me Zidna, Zidan, Fadla, or whatever you want. I'm a
          Back-end Developer located in Central Java, Indonesia.
          {/* <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. */}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
