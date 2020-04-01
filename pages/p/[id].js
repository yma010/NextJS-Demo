import { useRouter } from 'next/router';
import Layout from '../../component/MyLayout';

function Post() {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.id}</h1>
            <p>This is the blog post</p>
        </>
    )
}

export default Layout(Post);