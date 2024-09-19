import './app.css'

export function Header(){
    return(
    <div className="flex items-center bg-gray-500 h-20 w-full justify-between px-10">
        <p className='text'>logo</p>
        <div>
            <ul className="flex justify-between w-96 ">
                <li><a href="#" className="text">accueil</a></li>
                <li><a href="#" className='text'>à propos</a></li>
                <li><a href="#" className='text'>services</a></li>
                <li><a href="#" className='text'>contact</a></li>
            </ul>
        </div>
       <div className='bg-white rounded-full px-4 py-2'>
            <input type="text" placeholder="Recherchez ..." className='rounded-full outline-none px-2' />
            <a href="#" >&#128269;</a>
       </div>
    </div>
    
    )
}