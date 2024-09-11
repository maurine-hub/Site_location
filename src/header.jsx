

export function Header({filter}){
    return(
    <div className="flex items-center bg-red-400 h-20 w-full justify-between px-10">
        <p>logo</p>
        <div>
            <ul className="flex justify-between w-80">
                <li><a href="#">accueil</a></li>
                <li><a href="#">à propos</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
        <a href="#">&#128269; </a>
    </div>

    )
}