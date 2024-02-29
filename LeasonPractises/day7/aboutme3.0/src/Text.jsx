export default function Text({stuff, image, title}){
    return(
        <>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500">
    <div className="container mx-auto px-4">
        <h1 className="text-center mb-1 pt-9 text-3xl font-bold text-white">{title}</h1>
      
        <div className="flex items-left">

            <div className="flex items-center justify-center">
                <img src = {image} alt="Bard Language Model" className="rounded-full shadow-md mr-8 ml-8 p-3 w-40"></img>
            </div>
        
            <div className="text-left mt-4 bg-black bg-opacity-50 p-16">
                <p className="mb-4">{stuff}</p>
            </div>

        </div>

      </div>       
  </div>
        </>
    )
}