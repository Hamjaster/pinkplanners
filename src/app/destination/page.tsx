import React from 'react'

export default function page() {
    const cards = [
        {
            image: '/work1.jpg',
            text: 'Card 1 Text',
        },
        {
            image: '/work2.jpg',
            text: 'Card 2 Text',
        },
        {
            image: '/work3.jpg',
            text: 'Card 2 Text',
        },
        {
            image: '/work4.jpg',
            text: 'Card 2 Text',
        },
        {
            image: '/work5.jpg',
            text: 'Card 2 Text',
        },
        {
            image: '/work6.jpg',
            text: 'Card 2 Text',
        },
        // Add more cards as needed
    ];
    return (
        <div className='mb-44'>
            <div style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(./work4.jpg)'
            }} className="bg-image bg-cover bg-center w-full h-[34rem] text-white flex justify-center items-center mb-12">
                <div className="text mt-7 flex items-center flex-col space-y-4">
                    <div className="text-6xl font-semibold">
                        Destinations
                    </div>
                    <div className='text-3xl font-extralight text-center'>We've covered every area for you</div>
                </div>

            </div>
            {/* Cards */}
            <div className="grid mx-12 sm:mx-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-md cursor-pointer"
                    >
                        <div className="relative">
                            {/* <img
                                src={card.image}
                                alt={`Card ${index + 1}`}
                                className=""
                            /> */}
                            <div style={{
                                backgroundImage: `url(${card.image})`
                            }} className='w-full h-80 bg-cover bg-center transition-transform duration-300 transform scale-100 group-hover:scale-110'>
                            </div>

                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-20 ">
                            </div>
                            <p className="text-white text-base inset-0 flex flex-col items-center justify-center absolute text-center space-y-4">
                                <div className="text-3xl">{card.text}</div>
                                <div className="font-semibold text-xl w-2/3">Magnificient, Breathtaking, Iconic</div>
                                <div className="button transition-all duration-700 px-5 py-2 border-2 border-white group-hover:bg-white group-hover:text-black">
                                    Read More
                                </div>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
