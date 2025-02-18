"use client"


import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = Array.from({ length: 10 }, (_, i) => `/about/${i + 1}.png`);

const gridStyles = [
  "col-span-3 row-span-2 col-start-1",
  "col-span-4 row-span-2 col-start-4",
  "col-span-4 row-span-2 col-start-8",
  "col-span-4 row-span-2 col-start-12",
  "row-span-2 col-start-16",
  "col-span-2 row-span-2 col-start-1 row-start-3",
  "col-span-4 row-span-2 col-start-3 row-start-3",
  "col-span-4 row-span-2 col-start-7 row-start-3",
  "col-span-4 row-span-2 col-start-11 row-start-3",
  "col-span-2 row-span-2 col-start-15 row-start-3",
];

export default function About() {
  return (
    <main className="px-24">
      <section className="relative w-full bg-[#C7D0FF] border border-black shadow-md rounded-[42px] px-24 pt-16  flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-[6vw] lg:text-[4vw] uppercase tracking-tight text-[#222223] leading-tight">
          About <span className="font-extrabold">Shaurya</span>
        </h1>

        {/* Illustration */}
        <img
          src="/about-hero.png"
          alt="Illustration"
          className="w-full max-w-[1300px] h-auto mt-6"
        />

        {/* CTA Button - Positioned Bottom Left */}
        <div className="w-[95%] mx-auto flex justify-between items-center mt-6 absolute bottom-10 px-16">
          {/* Left: Support Button */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-4 bg-white px-8 py-4 text-lg font-medium border border-black rounded-full hover:bg-gray-200 transition">
              Support Shaurya
            </button>
            <button className="bg-white p-3 rounded-full border border-black hover:bg-gray-200 transition">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right: Play Button */}
          <button className="bg-white p-3 rounded-full border border-black hover:bg-gray-200 transition">
            <Play size={24} />
          </button>
        </div>
      </section>

      {/* who we are? */}
      <section className="w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-10 lg:px-20 py-10">
        {/* Left: Title */}
        <h2 className="text-[10vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1]">
          <span className="font-extralight">Who We</span> <br />{" "}
          <span className="font-extrabold">Are?</span>
        </h2>

        {/* Right: Description */}
        <p className="max-w-[50%] text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our vision is to create a world where individuals with special needs
          are empowered to live independently and contribute meaningfully to
          society.
        </p>
      </section>

      {/* image - bento grid */}
      <section className="w-[calc(100%-40px)] mx-auto my-10">
        <div className="grid grid-cols-16 grid-rows-4 gap-4">
          {images.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl ${gridStyles[index]}`}
            >
              <Image
                src={src}
                alt={`Collage image ${index + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Text columns section */}
      <section className="pb-20">
        <div className="px-16 mx-auto grid grid-cols-2 gap-10">
          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            Our programs are designed to develop functional skills, foster
            creativity, and instill a sense of responsibility in our students.
            We believe that education should be a joyful pursuit, one that
            ignites a lifelong love of learning. Empowerment Through Skills
            Development: We move beyond traditional welfare approaches by
            focusing on empowerment. Our programs are tailored to equip
            individuals with the skills they need to navigate the challenges of
            daily life, whether at home, at work, or in the community. We aim to
            build confidence and self-reliance, helping our trainees become
            independent adults.
          </p>

          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            Creating Inclusive Opportunities: SFT is dedicated to opening doors
            for persons with disabilities, ensuring they have access to the same
            opportunities as others. Through our initiatives, we aim to break
            down barriers and create pathways to employment, personal growth,
            and community involvement. Dignity, Not Charity: Our philosophy is
            rooted in respect and inclusion. We seek to change societal
            perceptions, shifting the narrative from one of charity to one of
            dignity. We want to change the image of persons with disabilities
            from being passive recipients of help to active contributors to
            society.
          </p>
        </div>
      </section>

      {/* our vision */}
      <section className="w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-10 lg:px-20 py-10">
        {/* Left: Title */}
        <h2 className="text-[10vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1]">
          <span className="font-extralight">Our</span> <br />{" "}
          <span className="font-extrabold">Vision</span>
        </h2>

        {/* Right: Description */}
        <p className="max-w-[50%] text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our vision is to create a world where individuals with special needs
          are empowered to live independently and contribute meaningfully to
          society.
        </p>
      </section>

      {/* vision image-grid */}
      <section className="w-[calc(100%-40px)] mx-auto pb-12 space-y-4">
        <div className="w-full h-[400px] relative overflow-hidden rounded-[40px] border">
          <Image
            src="/about/vision-1.png"
            alt="about"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex gap-4 h-[300px]">
          <div className="flex-1 relative overflow-hidden rounded-[40px] border">
            <Image
              src="/about/vision-2.png"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 relative overflow-hidden rounded-[40px] border">
            <Image
              src="/about/vision-3.png"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 relative overflow-hidden rounded-[40px] border">
            <Image
              src="/about/vision-4.png"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Text columns section */}
      <section className="pb-20">
        <div className="px-16 mx-auto grid grid-cols-2 gap-10">
          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            Our vision is to create a world where individuals with special needs
            are empowered to live independently and contribute meaningfully to
            society. At SFT, we envision a future where every person, regardless
            of their abilities, has the opportunity to live with dignity,
            achieve economic independence, and find purpose in their daily
            lives.
          </p>

          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            We are driven by the belief that with the right support, individuals
            with special needs can lead fulfilling lives, becoming active,
            respected members of their communities
          </p>
        </div>
      </section>

      {/* our mission */}
      <section className="w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-10 lg:px-20 py-10">
        {/* Left: Title */}
        <h2 className="text-[10vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1]">
          <span className="font-extralight">Our</span> <br />{" "}
          <span className="font-extrabold">Mission</span>
        </h2>

        {/* Right: Description */}
        <p className="max-w-[50%] text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our vision is to create a world where individuals with special needs
          are empowered to live independently and contribute meaningfully to
          society.
        </p>
      </section>

      {/* mission image */}
      <section className="w-[calc(100%-40px)] mx-auto my-10">
        <Image
          src="/about/mission-image.png"
          alt="about"
          width={1200}
          height={500}
          className="w-full h-auto border rounded-[40px]"
        />
      </section>

      {/* paragraph section */}
      <section>
        <div className="pl-16 mx-auto items-center text-justify tracking-widest">
          <p className="m-10">
            Excellence in Functional Education: At SFT, we are committed to
            providing a well-rounded education that goes beyond academics. Our
            programs are designed to develop functional skills, foster
            creativity, and instill a sense of responsibility in our students.
            We believe that education should be a joyful pursuit, one that
            ignites a lifelong love of learning.
          </p>

          <p className="m-10">
            Empowerment Through Skills Development: We move beyond traditional
            welfare approaches by focusing on empowerment. Our programs are
            tailored to equip individuals with the skills they need to navigate
            the challenges of daily life, whether at home, at work, or in the
            community. We aim to build condence and self-reliance, helping our
            trainees become independent adults.
          </p>

          <p className="m-10">
            Creating Inclusive Opportunities: SFT is dedicated to opening doors
            for persons with disabilities, ensuring they have access to the same
            opportunities as others. Through our initiatives, we aim to break
            down barriers and create pathways to employment, personal growth,
            and community involvement.
          </p>

          <p className="m-10">
            Dignity, Not Charity: Our philosophy is rooted in respect and
            inclusion. We seek to change societal perceptions, shifting the
            narrative from one of charity to one of dignity. We want to change
            the image of persons with disabilities from being passive recipients
            of help to active contributors to society..
          </p>
        </div>
      </section>

      {/* our programs */}
      <section className="w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-10 lg:px-20 py-10">
        {/* Left: Title */}
        <h2 className="text-[10vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1]">
          <span className="font-extralight">Our</span> <br />{" "}
          <span className="font-extrabold">Programs</span>
        </h2>

        {/* Right: Description */}
        <p className="max-w-[50%] text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our comprehensive programs are designed to support individuals with
          special needs through every stage of their journey towards
          independence and meaningful participation in society.
        </p>
      </section>

      {/* programs image */}
      <section className="w-[calc(100%-40px)] mx-auto my-10">
        <Link 
          href="/admission" 
          className="relative block group overflow-hidden rounded-[40px] cursor-pointer"
        >
          <Image
            src="/about/program-image.png"
            alt="about"
            width={1200}
            height={500}
            className="w-full h-auto border rounded-[40px] transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#2C438A]/80 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <h3 className="text-[#F0DA69] text-4xl font-bold mb-4 transform translate-y-10 transition-transform duration-500 group-hover:translate-y-0">
              Our Programs
            </h3>
            <p className="text-white text-lg max-w-[600px] text-center px-8 transform translate-y-10 transition-transform duration-500 group-hover:translate-y-0">
              Discover our comprehensive programs designed to empower individuals with special needs through education, life skills, and community integration.
            </p>
          </div>
        </Link>
      </section>


    </main>
  );
}