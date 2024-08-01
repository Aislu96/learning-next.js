import Link from "next/link";

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
}

export default async function Home() {
    const posts = await fetchData();
    return (
        <div className="main">
            <h1>Главная страница</h1>
            {posts.map(el=> (
                <div key={el.id} className="post">
                    <h2>{el.title}</h2>
                    <p>{el.body}</p>
                    <Link href={`/post/` + el.id}>детальнее</Link>
                </div>
            ))}
        </div>
    );
}
