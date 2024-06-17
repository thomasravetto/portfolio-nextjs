import Link from "next/link";
import Image from "next/image";
import { DiNodejs, DiReact, DiPostgresql, DiDocker, DiMongodb, DiPython } from "react-icons/di";
import { FaAws, FaGithubSquare } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { MdArrowBackIos } from "react-icons/md";
import Footer from "../footer/footer";
import Slider from "./slider";
import { IDescriptions } from "@/data/descriptions";

// interface IProject {
//   id: number;
//   image_path: string;
//   date: string;
//   title: string;
//   subtitle: string;
// }

interface ITech {
  name: string,
  logo: JSX.Element,
  href: string
}

type TechNames = "node" | "react" | "postgres" | "aws" | "docker" | "mongo" | "python" | "flask";

const techObject: Record<TechNames, ITech> = {
  node: {
    name: "Node.js",
    logo: <DiNodejs/>,
    href: "https://nodejs.org/en"
  },
  react: {
    name: "React",
    logo: <DiReact/>,
    href: "https://react.dev/"
  },
  postgres: {
    name: "PostgreSQL",
    logo: <DiPostgresql/>,
    href: "https://www.postgresql.org/"
  },
  aws: {
    name: "Amazon Web Services",
    logo: <FaAws/>,
    href: "https://aws.amazon.com/it/"
  },
  docker: {
    name: "Docker",
    logo: <DiDocker/>,
    href: "https://www.docker.com/"
  },
  mongo: {
    name: "MongoDB",
    logo: <DiMongodb/>,
    href: "https://www.mongodb.com/"
  },
  python: {
    name: "Python",
    logo: <DiPython/>,
    href: "https://www.python.org/"
  },
  flask: {
    name: "Flask",
    logo: <SiFlask/>,
    href: "https://flask.palletsprojects.com/en/3.0.x/"
  },
}

export default function Project ({ projectData }: { projectData: IDescriptions }) {

  const descriptionLines = projectData.description.split('\n');
  const keyFeaturesLines = projectData.key_features.split('\n');

  return (
    <div>
      <div className='mt-20 flex flex-col items-center'>
        <div className="flex justify-around w-full">
          <button><Link href={"/#portfolio"}><MdArrowBackIos className="text-2xl"/></Link></button>
          <h1 className="text-5xl font-semibold p-6">{projectData.title}</h1>
          <div></div>
        </div>


        <Slider images={projectData.images}/>
        {/* <div>
          {projectData.images.map((image, index) => {
            return image.includes('.mp4') ?
              ( <video width="1000" height="800" controls autoPlay>
                  <source src={image} type="video/mp4" />
                  <track
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video> ) :
              ( <Image key={index} src={image} alt={`Project ${index}`} width={1000} height={800} /> )
          })}
        </div> */}
        <h2 className="text-4xl font-semibold">What is {projectData.title.split(" - ")[0]}?</h2>
        <div className="text-center py-10">
          {
            descriptionLines.map((line, index) => (
              <div key={index} className="text-gray-500 text-md tracking-tighter">
                <p className="px-20 text-lg text-gray-400">{line}</p>
              </div>
            ))
          }
        </div>
        <h2 className="text-4xl font-semibold"><span className="primary">Key-</span>features</h2>
        <div className="text-center py-10">
          {
            keyFeaturesLines.map((line, index) => (
              <div key={index} className="text-gray-500 text-md tracking-tighter">
                <li className="px-20 text-lg text-gray-400">{line}</li>
              </div>
            ))
          }
        </div>
        <h2 className="text-4xl font-semibold"><span className="primary">Built</span> with</h2>
        <ul className="flex">
          {projectData.tech.map((tech, index) => (
            <li key={index} className="tech-logo text-7xl p-6"><Link href={techObject[tech as TechNames].href}>{techObject[tech as TechNames].logo}</Link></li>
          ))}
        </ul>
        {
              projectData.github &&
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold primary">Links</h1>
                <Link href={projectData.github} className="py-10">
                  <FaGithubSquare className="text-5xl github-project-link cursor-pointer"/>
                </Link>
              </div>
            }
      </div>
    <Footer/>
    </div>
  );
};
