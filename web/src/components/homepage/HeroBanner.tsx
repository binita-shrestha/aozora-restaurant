import Image from "next/image"

export default function HeroBanner() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[10vh] bg-aozora-cream text-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-aozora-dark">Welcome</h1>
            <div className="flex justify-center md:justify-start">
                      <Image 
                        src="/images/logo.PNG" 
                        alt="Aozora Logo" 
                        width={320}
                        height={320}
                        className="object-cover object-left"
                      />
            </div>
        </section>
    )
}