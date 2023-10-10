import { createClient, groq } from "next-sanity";

export async function getProject() {
    const client = createClient({
        projectId:"l6wza8xc",
        dataset:"production",
        apiVersion:"2023-10-10",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
    )
}
