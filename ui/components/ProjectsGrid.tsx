/* eslint-disable sonarjs/no-duplicate-string */
import { CardProps } from "types"
import ProjectCard from "./ProjectCard"

import islanderImage from "../../public/assets/island.jpg"
import mountyImage from "../../public/assets/mountain.jpg"
import planetImage from "../../public/assets/planet.jpg"

const projects: CardProps[] = [
  {
    title: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    src: planetImage,
    alt: "Planetaria App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
  {
    title: "Islander",
    description: "Rest and abide with island freaks like yourself. Too scared?",
    src: islanderImage,
    alt: "Islander App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
  {
    title: "Mounty",
    description:
      "Climbing daring heights like there is no tomorrow! Yes, we dare!",
    src: mountyImage,
    alt: "Mounty App",
    githubUrl: "https://github.com/lucky-chap/kaminari",
    liveUrl: "https://github.com/lucky-chap/kaminari",
  },
]

export default function ProjectsGrid() {
  return (
    <div className="mx-auto max-w-2xl px-2 pt-10">
      <h2 className="leading-tighter mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
        Projects
      </h2>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
        {projects.map((p: CardProps) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            src={p.src}
            alt={p.alt}
            githubUrl={p.githubUrl}
            liveUrl={p.liveUrl}
          />
        ))}
      </div>
    </div>
  )
}
