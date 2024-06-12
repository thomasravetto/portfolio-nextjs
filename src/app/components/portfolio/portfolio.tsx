import { projects } from "@/data/projects";
import Project from "./project";


export default function Portfolio () {
    return (
        <div id='portfolio' className="flex flex-col items-center">
            <h1 className="text-5xl font-semibold p-6">My <span className="primary">Journey</span></h1>

            {
                projects.map((project, index) => {
                    return <Project key={project.id} project={project} left={index % 2 === 0}/>
                })
            }
        </div>
    );
}