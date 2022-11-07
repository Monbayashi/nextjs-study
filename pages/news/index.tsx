// our-domain.com/news
import Link from 'next/link';

const NewsPage: React.FC = () => (
    <>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href="/news/nextjs-is-a-graat-framework">
                    NextJS Is A Greate Framework
                </Link>
            </li>
            <li>
                <Link href="/news/something-else">
                    Something Else
                </Link>
            </li>
        </ul>
    </>
);

export default NewsPage;
