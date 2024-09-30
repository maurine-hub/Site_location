import './app.css'


export function Header(){
    return(
    <div className="flex items-center bg-teal-800 h-20 w-full justify-between px-10">
        <p className='text'>logo</p>
        <div>
            <ul className="flex justify-between w-96 ">
                <li><a href="#" className="text">expériences</a></li>
                <li><a href="#" className='text'>logement</a></li>
                <li><a href="#" className='text'>favoris</a></li>
                {/* <li className='bg-amber-300 p-4'><a href="#" className='text'>contact</a></li> */}
            </ul>
        </div>
       {/* <div className='bg-white rounded-full px-4 py-2'>
            <input type="text" placeholder="Recherchez ..." className='rounded-full outline-none px-2' />
            <a href="#" >&#128269;</a>
       </div> */}

       <div className='flex w-[30%] justify-between'>
        <p className='border-2 rounded-md p-3 text-white'>Mettre son logement sur ...</p>
        <button className='bg-white p-4 rounded-md'>contact</button>
       </div>
    </div>
    
    )
}