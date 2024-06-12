'use client'

import { usePathname } from "next/navigation";
import { descriptions, getDescriptionsData, getDescriptionsPaths, IDescriptions } from "@/data/descriptions";
import Project from "../../components/project/project";

interface IParams {
    project_name: string;
}

interface IProjectPageProps {
    projectData: IDescriptions;
}


export default function Page () {
    const pathname = usePathname();
    const project_name = pathname?.split("/")[2];

    if (typeof project_name !== 'string') {
        return <div>Error</div>;
    }

    const projectData: IDescriptions | undefined = descriptions[project_name];

    if (!projectData) {
        return <div>Project not found</div>;
    }

    return(
        <Project projectData={projectData}/>
    )
}

// export async function getStaticPaths () {
//     const paths = getDescriptionsPaths();
//     return {
//         paths,
//         fallback: false,
//     }
// }x

// export async function getStaticProps ({ params }: { params: IParams }): Promise<{ props: IProjectPageProps }> {
//     const projectName = params?.project_name;
//     if (!projectName) {
//         throw new Error("Project name parameter is missing");
//     }

//     const projectData = getDescriptionsData(projectName);

//     if (!projectData) {
//         throw new Error("Project data not found");
//     }

//     return {
//         props: {
//             projectData
//         }
//     }
// }