import "./post.css";
import Link from 'next/link'
import Image from 'next/image'

export default function Post({img, title, text, id}) {
  return (
    <div className="post">
      <Image
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link href={'/blog/pages/'+id} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {text}
      </p>
    </div>
  );
}