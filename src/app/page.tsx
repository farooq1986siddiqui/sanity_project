import { getProject } from "../../sanity/schemas/sanity.utils"


export default async function Home() {
  const projects = await getProject();
  console.log("This is data:",projects)
  return (
    <div>
      {
        projects.map((project:any)=>(
          <div key={project._id}>{project.name}</div>
        ))
      }
    </div>
  )
}

