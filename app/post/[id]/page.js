import Link from "next/link";
import Post from '@/app/components/Post';

export async function generateMetadata ({params, searchParams}){
 const post = await fetchData(params.id);
 return {
     title: post.title,
     description: post.body
 }
}

async function fetchData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + [id]);
    return await res.json();
}

const PagePost = async ({ params: { id } }) => {
    const post = await fetchData(id);
    return (
        <div className="post">
          <Post post={post}/>
        </div>
    );
}


export default PagePost;