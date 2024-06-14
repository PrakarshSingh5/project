import Sidebar from '../../component/sidebar/Sidebar'
import SinglePost from '../../component/singlepost/SinglePost'

import './single.css'

export default function Single() {
  return (
    <div className='single'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
