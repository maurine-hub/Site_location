import {Carousel} from './carousel.jsx'


export function Hero (){
    return(
        <div className="flex p-20 bg-gray-200 w-full h-auto">
            <div className="w-[50%]">
                <h1 className="text-5xl capitalize font-bold mb-10 ">recherche d appartement ou maison</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, necessitatibus, dolorum ratione porro corrupti repellat officiis quis, odio veniam dolore odit.
                    Exercitationem, nulla corporis quis odio quibusdam fuga labore veniam.
                </p>
            </div>

            <div className="w-[50%]">
                <Carousel/>
            </div>
        </div>
    )
}