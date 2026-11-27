import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="bg-aozora-cream py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Intro Paragraph */}
        <div className="text-center max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-aozora-dark mb-6">About Us</h2>
          <p className="text-lg text-aozora-dark leading-relaxed mb-4">
            We are located at the heart of our Pokhara City. We welcome you all to dine with us! We are celebrated for our authentic Japanese cuisine and warm hospitality. Whether you&apos;re a local or a weary trekker, our peaceful back garden offers a tranquil escape from the bustling streets.
          </p>
          <p className="text-lg text-aozora-dark leading-relaxed mb-4">
            We take pride in our affordable and extensive menu, featuring hearty ramen, tempura, sushi, and comforting curry rice. Our staff is always ready to accommodate with your needs, pairing flavorful dishes with refreshing drinks like our signature Plum Soda for a memorable experience.
          </p>
          <p className="text-lg text-aozora-dark leading-relaxed">
            We prepare fresh Tofu, Udon, Ramen, and Soba Noodles in-house.
          </p>
        
          
        </div>

        {/* Staff Image Section */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl mb-4 shadow-md">
            <Image 
              src="/images/teamphoto.jpeg" 
              alt="Aozora Restaurant Staff" 
              width={1000} 
              height={500} 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-aozora-dark font-bold text-center">
            Meet the staff behind your delicious food.
          </p>
        </div>
      </div>
    </section>
  );
}