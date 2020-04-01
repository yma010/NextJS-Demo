import Layout from '../component/MyLayout';
import Link from 'next/link';

const PostLink = props => {
    return(
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>
                {props.title}
            </a>
        </Link>
    </li>
    )
}

const Page = () => {
    return(
    <div>
        <h1>
            My Blog
        </h1>    
        <ul>
            <PostLink title="Hello Next.js"/>
            <PostLink title="Learning"/>
            <PostLink title="Helth"/>
        </ul>
    </div>
    )
}



export default Layout(Page);