import Button from "../ui/Button"


const Banner = () => {
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="ps-24">
                    <h5 className="text-[#f9b800] uppercase text-2xl font-bold">risus praesent vulputate. </h5>
                    <h1 className="text-7xl font-bold leading-20 mb-15">Cursus Integer
                        Consequat Tristique.</h1>
                    <ul className="flex flex-wrap gap-3.5 mb-15">
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Cursus Integer</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Integer Consequat </span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Tellus Euismod Pellentesque</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Aliquot Tristique</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Pellentesque Tempus</span>
                        </li>
                        <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full">
                            <img src="/img/icons/check_circle.svg" alt="icon" />
                            <span>Mauris Fermentum Praesent</span>
                        </li>
                    </ul>
                    <Button
                        label="Lorem Ipsum"
                        bgColor="#f9b800"
                        textColor="#262626"
                        shadowColor="black"
                        width="350px"
                    />
                </div>
                <div className="relative">
                    <div className="relative w-full h-full z-1">
                        <img src="/img/banner/banner-bg.png" alt="banner" className="w-full" />
                    </div>
                    <div className="absolute top-43 z-2 left-91 animate-pulse-bounce">
                        <img src="/img/banner/circle.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-39 left-23 z-2 animate-pulse-bounce">
                        <img src="/img/banner/circle-medium.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-34 left-19 z-2 animate-pulse-bounce">
                        <img src="/img/banner/circle-small.png" alt="banner" />
                    </div>
                    <div className="absolute top-80 z-2 right-79 animate-rotate-45">
                        <img src="/img/banner/ear-ring.png" alt="banner" />
                    </div>
                    <div className="absolute top-80 z-2 left-88 animate-rotate-15">
                        <img src="/img/banner/face.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-67 left-5 animate-rotate-45">
                        <img src="/img/banner/flower.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-62 left-18 animate-rotate-45">
                        <img src="/img/banner/flower.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-40 left-48 z-2 to-top-animation">
                        <img src="/img/banner/fruit-laptop.png" alt="banner" />
                    </div>
                    <div className="absolute top-75 left-22 z-2 to-top-animation-full">
                        <img src="/img/banner/img-1.png" alt="banner" />
                    </div>
                    <div className="absolute top-65 z-2 right-7 to-right-animation">
                        <img src="/img/banner/img-2.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-60 z-2 right-20 bounce-steps">
                        <img src="/img/banner/img-3.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-32 right-56 z-2 to-top-animation">
                        <img src="/img/banner/juice.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-32 right-56 z-2 ">
                        <img src="/img/banner/juice.png" alt="banner" />
                    </div>
                    <div className="absolute bottom-32 left-18 w-155 h-105">
                        <img src="/img/banner/skew-bg.png" alt="banner" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner