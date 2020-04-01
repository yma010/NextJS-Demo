import Layout from '../component/MyLayout';
import Link from 'next/link';

const PostLink = props => {
    return(
    <li>
        <Link href='/p/[id]' as= {`/p/${props.id}`}>
            <a>
                {props.id}
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
            <PostLink id="hello-nextjs"/>
            <PostLink id="learning"/>
            <PostLink id="helth"/>
        </ul>
    </div>
    )
}



export default Layout(Page);