import { useRouter } from 'next/router';
import Layout from '../component/MyLayout';

const Page = () => {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.title}</h1>
            <p>This is the blog post</p>
        </div>
    );
};

export default Layout(Page);