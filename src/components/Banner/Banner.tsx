import { useEffect, useRef } from "react";
import Button from "../ui/Button"
import Typed from "typed.js";


const Banner = () => {

    const el = useRef(null);

    useEffect(() => {
        new Typed(el.current, {
            strings: ['Tristique.'],
            typeSpeed: 50,
            loop: true,
            backSpeed: 50,
            startDelay: 1000,
        });
        return () => { };
    }, []);

    return (
        <section className="px-3">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="xl:ps-16 lg:ps-8 order-2 lg:order-1">
                        <h5 className="text-[#f9b800] uppercase 2xl:text-3xl lg:text-2xl md:text-3xl font-bold">risus praesent vulputate. </h5>
                        <h1 className="2xl:text-7xl xl:text-6xl lg:text-4xl md:text-5xl font-bold 2xl:leading-20 lg:leading-12 md:leading-16 xl:mb-15 lg:mb-6 md:mb-10">Cursus Integer <br />
                            Consequat  <span ref={el} /></h1>
                        <ul className="flex flex-wrap xl:gap-3.5 lg:gap-2 md:gap-3.5 xL:mb-15 md:mb-10 2xl:text-xl xl:text-lg lg:text-base md:text-lg">
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Cursus Integer</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Integer Consequat </span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Tellus Euismod Pellentesque</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Aliquot Tristique</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Pellentesque Tempus</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Mauris Fermentum Praesent</span>
                            </li>
                        </ul>
                        <Button
                            label="Lorem Ipsum"
                            bgColor="#f9b800"
                            textColor="#262626"
                            shadowColor="#262626"
                        />
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <div className="relative w-full h-full z-1">
                            <img src="/img/banner/banner-bg.png" alt="banner" className="w-full" />
                        </div>
                        <div className="absolute z-2 2xl:top-43 2xl:left-91 xl:top-35 xl:left-75 lg:top-28 lg:left-60 md:top-41 md:left-90 2xl:w-12.5 xl:w-10 lg:w-8 md:w-12 animate-pulse-bounce">
                            <img src="/img/banner/circle.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:bottom-39 2xl:left-23 xl:bottom-33 xl:left-18 lg:bottom-26 lg:left-15 md:bottom-39 md:left-22 xl:w-6 lg:w-4 md:w-6 z-2 animate-pulse-bounce-small">
                            <img src="/img/banner/circle-medium.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:bottom-34 2xl:left-19 xl:bottom-28 xl:left-15 lg:bottom-22 lg:left-12 md:bottom-33 md:left-18 xl:w-4 lg:w-3 md:w-4 z-2 animate-pulse-bounce-small">
                            <img src="/img/banner/circle-small.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-80 2xl:right-79 xl:top-66 xl:right-65 lg:top-53 lg:right-52 md:top-79 md:right-76.5 2xl:w-4 xl:w-3 lg:w-2.5 md:w-4 animate-rotate-15">
                            <img src="/img/banner/ear-ring.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-80 2xl:left-88 xl:top-66 xl:left-73 lg:top-53 lg:left-58 md:top-79 md:left-87 2xl:w-10 xl:w-8.5 lg:w-7 md:w-10 animate-rotate-15">
                            <img src="/img/banner/face.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:bottom-67 2xl:left-5 xl:bottom-55 xl:left-4 lg:bottom-43 lg:left-2.5 md:bottom-66 md:left-5 xl:w-12 lg:w-10 animate-rotate-45">
                            <img src="/img/banner/flower.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:bottom-62 2xl:left-18 xl:bottom-52 xl:left-14 lg:bottom-41 lg:left-11 md:bottom-62 md:left-17 xl:w-12 lg:w-10 animate-rotate-45">
                            <img src="/img/banner/flower.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:bottom-40 2xl:left-48 xl:bottom-32 xl:left-40 lg:bottom-25 lg:left-30 md:bottom-40 md:left-45 2xl:w-9.5 xl:w-8 lg:w-7 md:w-8.5 z-2 to-top-animation">
                            <img src="/img/banner/fruit-laptop.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:top-75 2xl:left-22 xl:top-60 xl:left-15 lg:top-50 lg:left-10 md:top-70 md:left-15 2xl:w-43 xl:w-38 lg:w-30 md:w-40 z-2 to-top-animation-full">
                            <img src="/img/banner/img-1.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-65 2xl:right-7 xl:top-55 xl:right-10 lg:top-40 lg:right-10 md:top-62 md:right-13 2xl:w-45 xl:w-35 lg:w-25 md:w-40 to-right-animation">
                            <img src="/img/banner/img-2.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:bottom-60 2xl:right-20 xl:bottom-52 xl:right-18 lg:bottom-45 lg:right-15 md:bottom-60 md:right-25 xl:w-16.5 lg:w-12 to-bottom-animation">
                            <img src="/img/banner/img-3.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:bottom-32 2xl:right-56 xl:bottom-26 xl:right-46.5 lg:bottom-20 lg:right-37 md:bottom-30 md:right-55 z-2 to-top-animation 2xl:w-17.5 xl:w-15 lg:w-12">
                            <img src="/img/banner/juice.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:bottom-32 2xl:right-56 xl:bottom-26 xl:right-46.5 lg:bottom-20 lg:right-37 md:bottom-30 md:right-55 z-2 2xl:w-17.5 xl:w-15 lg:w-12">
                            <img src="/img/banner/juice.png" alt="banner" />
                        </div>
                        <div className="absolute xl:bottom-32 xl:left-18 lg:bottom-22 lg:left-13 md:bottom-32 md:left-21 2xl:w-155 2xl:h-105 xl:w-120 xl:h-80 lg:w-100 lg:h-70">
                            <img src="/img/banner/skew-bg.png" alt="banner" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner