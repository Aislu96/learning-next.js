import Link from "next/link";
import Post from '@/app/components/Post'

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