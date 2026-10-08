
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-base-200">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-8 md:py-20">

        {/* Left Side */}
        <div className="text-center md:text-left">

          {/* Eyebrow / Small Text */}
          <p className="mb-3 text-sm font-semibold text-primary">
            আজকের বাজারদর
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            সঠিক বাজারদর জানুন
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base text-base-content/70 md:text-lg">
            প্রতিদিনের প্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর
            এক জায়গায় দেখুন।
          </p>

          {/* CTA Button */}
          <a
            href="#সব-পণ্য"
            className="btn btn-primary mt-6"
          >
            সব পণ্য দেখুন
          </a>

        </div>

        {/* Right Side - Hero Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/hero-banner.jpg"
            alt="বাজার দর"
            width={600}
            height={400}
            className="h-auto w-full max-w-md rounded-2xl object-cover md:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;