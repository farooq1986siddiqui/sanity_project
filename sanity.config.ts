import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas"
const config = defineConfig({
    projectId:"l6wza8xc",
    dataset:"production",
    title:"My Personal Website",
    apiVersion:"2023-10-10",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemas}
})


export default config