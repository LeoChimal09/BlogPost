import { lstat } from "fs";
import { url } from "inspector";
import Link from "next/link";

//importing the image components
const mcdonaldsImages= [
  {id: 1, url: '/images/FrenchFries.jpg'},
  {id: 2, url: '/images/McLine.jpg'},
  {id: 3, url:  '/images/BaconEggCheeseBiscuit.jpg'},
  {id: 4, url: '/images/Briefcase.jpg'},
];

// I will be splitting the images into two sections
const firstThreeImages = mcdonaldsImages.slice(0, 3);
const lastImage = mcdonaldsImages.slice(3, 4);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <section>
        <h1 className="text-4xl font-bold">Hello welcome to my Blog</h1>
        <p className="text-lg">I have created this blog to practice developing on React</p>
        <h2>I will be describing a rant that is very controversial</h2>
      </section>
      <h1 className="text-3xl font-bold">McDonalds is overated</h1>
      <section>
        <div className="flex flex-wrap">{
        firstThreeImages.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="mcdonalds"/>
        </div>
        ))
        }</div>
      </section>
      <h1 className="text-3xl font-bold">I will be discussing the reasons why McDonalds is overated</h1>
      <h2 className="text-lg">Number 1. Its madd weakkk and the food not even good</h2>
      <h3 className="text-lg">Number 2. The only good thing is the breakfast fr fr</h3>
      <h4 className="text-lg">Number 3. Why do people like eating soggy fries, and them dry chicken nuggets???</h4>
      <h5 className="text-3xl font-bold">Case is closed</h5>
      <section>
        <div className="flex flex-wrap">{
        lastImage.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="briefcase"/>
        </div>
        ))
        }</div>
      </section>
    </main>
  );
}
