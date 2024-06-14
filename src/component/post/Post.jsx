import { Link } from 'react-router-dom'
import './post.css'

export default function Post({post}) {
  const pblfolder="http://localhost:5000/images/"
  return (
    <div className='post'>
      {post.photo && (
      <img  className='postimg' src={pblfolder+post.photo} alt=''/> )}
    <div className='postdata'>
        <div className='postcate'>
          { post.categories.map(c => (
               <span className='postcat'>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className='link'>
            <span className='posttitle'>{post.title}</span>
        </Link>
        {/* <span className='posttitle'>
           <Link to='/post/:postId' className='link'> {post.title}</Link> 
        </span> */}
        <hr/>
        <span className='postdate'>{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className='postdesc'>{post.desc}
    </p>
    </div>
  )
}
