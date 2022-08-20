import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import projects from '@/data/projects.json';
import InitRandomizer from '@/utils/RandomInt';

const colors = Object.values(ColorTags);
const randomizer = InitRandomizer(colors.length - 1);

const getRandomColor = (): any => {
  return colors[randomizer()];
};

const ProjectList = () => {
  return (
    <Section
      title={
        <>
          Recent <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
            img={project.img}
            category={project.categories.map((category, i2) => (
              <Tags key={i2} color={getRandomColor()}>
                {category}
              </Tags>
            ))}
          />
        ))}
      </div>
    </Section>
  );
};

export { ProjectList };
