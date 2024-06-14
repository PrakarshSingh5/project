import './header.css';

export default function Header() {
  return (
    <div className='header'>
            <div className='headertitles'>
               <span className='headertitle1'>Society Sphere</span> 
               <span className='headertitle2'>Blog</span>
            </div>
            <img className='headerimg' src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>    
    </div>
  );
}
