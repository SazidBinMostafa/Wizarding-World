function About(){
    return <>
    <div className="px-5 lg:px-32 flex flex-col justify-center">
        <div className="relative text-center">
            <img src="https://harrypottershop.co.uk/cdn/shop/files/Diagon_Alley_2048x.jpg?v=1614328778" alt="" />
            <div className="absolute top-1/3 lg:top-[40%] w-full text-center"><h1 className="text-5xl text-white font-bold">About Us</h1></div>
        </div>

        <div className="text-center border rounded p-8 mt-8">
                <h3 className="text-xl">The Wizarding World Shop is the official online shop for all your wizarding books. Studio Tour London, the Harry Potter shop at Platform 9 ¾ and Harry Potter New York providing a spellbinding shopping experience.

                    Discover everything from fan-favourites and brand collaborations to exclusive designs and one-of-a-kind personalisation in the largest collection of Harry Potter and Fantastic Beasts products in the world. With over 1000 items, every fan will find something magical to add to their collection.

                    Stay up to date on all the latest Harry Potter Shop news as well as new and exclusive product launches by signing up to our newsletter!</h3>
            </div>
    </div>
    </>
}

export default About;