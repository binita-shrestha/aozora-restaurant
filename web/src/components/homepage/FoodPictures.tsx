import Image from 'next/image';

export default function FoodPictures() {
    return (
        <section className="py-12 px-8 max-w-7xl mx-auto bg-aozora-red">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food Image */}
            <div className="w-full">
                <Image 
                    src="/images/in1.jpeg" 
                    alt="Aozora interior" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/food4.jpg" 
                    alt="Aozora dish" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/food1.jpg" 
                    alt="Aozora dish" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/drink1.jpg" 
                    alt="Aozora signature drink" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/food2.jpg" 
                    alt="Aozora dish" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/in2.jpeg" 
                    alt="Aozora interior" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            
            <div className="w-full">
                <Image 
                    src="/images/in3.jpeg" 
                    alt="Aozora interior" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/food3.jpg" 
                    alt="Aozora dish" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/food5.jpg" 
                    alt="Aozora dish" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/food6.jpg" 
                    alt="Aozora dish" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/food8.jpg" 
                    alt="Aozora dish" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            <div className="w-full">
                <Image 
                    src="/images/in4.jpeg" 
                    alt="Aozora interior" 
                    width={400} 
                    height={300} 
                    className="w-full aspect-square object-cover"
                />
            </div>
            </div>

        </section>
    );
}