// import {Carousel} from './carousel.jsx'


export function Hero (){
    return(
        <div className="flex relative  h-screen bg-[url(https://a0.muscache.com/im/pictures/75786749/56fcb082_original.jpg?im_w=720)] bg-no-repeat bg-cover bg-left">
            <div className="absolute inset-0 bg-[#11243a] bg-opacity-50 p-20 w-full">

              <div className="w-[50%]">
                <h1 className="text-5xl capitalize font-bold mb-10 text-white ">recherche appartement ou maison</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, necessitatibus, dolorum ratione porro corrupti repellat officiis quis, odio veniam dolore odit.
                    Exercitationem, nulla corporis quis odio quibusdam fuga labore veniam.
                </p>
              </div>

              <div className="w-[50%]">
              </div>

            </div>
        </div>
    )
}