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
            backDelay: 1000,
            startDelay: 1000,
            cursorChar: '|',
            smartBackspace: true,
        });
        return () => { };
    }, []);

    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="ps-16">
                    <h5 className="text-[#f9b800] uppercase 2xl:text-3xl lg:text-2xl font-bold">risus praesent vulputate. </h5>
                    <h1 className="2xl:text-7xl xl:text-6xl font-bold leading-20 mb-15">Cursus Integer
                        Consequat  <span ref={el} /></h1>
                    <ul className="flex flex-wrap gap-3.5 mb-15 2xl:text-xl lg:text-lg">
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Cursus Integer</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full ">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Integer Consequat </span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full ">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Tellus Euismod Pellentesque</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full ">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Aliquot Tristique</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full ">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Pellentesque Tempus</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full ">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
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
                <div className="relative">
                    <div className="relative w-full h-full z-1">
                        <img src="/img/banner/banner-bg.png" alt="banner" className="w-full" />
                    </div>
                    <div className="absolute z-2 2xl:top-43 2xl:left-91 xl:top-35 xl:left-75 2xl:w-12.5 xl:w-10 animate-pulse-bounce">
                        <img src="/img/banner/circle.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:bottom-39 2xl:left-23 xl:bottom-33 xl:left-18 z-2 animate-pulse-bounce-small">
                        <img src="/img/banner/circle-medium.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:bottom-34 2xl:left-19 xl:bottom-28 xl:left-15 z-2 animate-pulse-bounce-small">
                        <img src="/img/banner/circle-small.png" alt="banner" />
                    </div>
                    <div className="absolute z-2 2xl:top-80 2xl:right-79 xl:top-66 xl:right-65 2xl:w-4 xl:w-3 animate-rotate-15">
                        <img src="/img/banner/ear-ring.png" alt="banner" />
                    </div>
                    <div className="absolute z-2 2xl:top-80 2xl:left-88 xl:top-66 xl:left-73 2xl:w-10 xl:w-8.5 animate-rotate-15">
                        <img src="/img/banner/face.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:bottom-67 2xl:left-5 xl:bottom-55 xl:left-4 animate-rotate-45">
                        <img src="/img/banner/flower.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:bottom-62 2xl:left-18 xl:bottom-52 xl:left-14 animate-rotate-45">
                        <img src="/img/banner/flower.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:bottom-40 2xl:left-48 xl:bottom-32 xl:left-40 2xl:w-9.5 xl:w-8 z-2 to-top-animation">
                        <img src="/img/banner/fruit-laptop.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:top-75 2xl:left-22 xl:top-60 xl:left-15 2xl:w-43 xl:w-38 z-2 to-top-animation-full">
                        <img src="/img/banner/img-1.png" alt="banner" />
                    </div>
                    <div className="absolute z-2 2xl:top-65 2xl:right-7 xl:top-55 xl:right-10 2xl:w-45 xl:w-35 to-right-animation">
                        <img src="/img/banner/img-2.png" alt="banner" />
                    </div>
                    <div className="absolute z-2 2xl:bottom-60 2xl:right-20 xl:bottom-52 xl:right-18 to-bottom-animation">
                        <img src="/img/banner/img-3.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:bottom-32 2xl:right-56 xl:bottom-26 xl:right-46.5 z-2 to-top-animation 2xl:w-17.5 xl:w-15">
                        <img src="/img/banner/juice.png" alt="banner" />
                    </div>
                    <div className="absolute 2xl:bottom-32 2xl:right-56 xl:bottom-26 xl:right-46.5 z-2 2xl:w-17.5 xl:w-15">
                        <img src="/img/banner/juice.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-32 left-18 2xl:w-155 2xl:h-105 xl:w-120 xl:h-80 lg:w-100 lg:h-70">
                        <img src="/img/banner/skew-bg.png" alt="banner" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner