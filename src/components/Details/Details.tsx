import Button from "../ui/Button"


const Details = () => {
    return (
        <section className="bg-[#f9b800] pt-10 pb-100 [clip-path:polygon(0_0%,100%_0%,100%_75%,0%_100%)]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="ps-16">
                        <h4 className="text-5xl leading-15 mb-15">Cursus Integer <br />
                            consequat Tristique.</h4>
                        <ul className="flex flex-wrap gap-3.5 mb-15">
                            <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full text-xl">
                                <img src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Ac viverra sed risus praesent vulputate. </span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full text-xl">
                                <img src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Natoqu consectetur pulvinar. </span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full text-xl">
                                <img src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Sollicitudin ornare tempus nulla varius pulvinar.</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full text-xl">
                                <img src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Varius pulvinar</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full text-xl">
                                <img src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Natoque id tellus consectetur</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 pe-6 py-3 rounded-full text-xl">
                                <img src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Vulputate et vulputate suspendisse</span>
                            </li>
                        </ul>
                        <Button
                            label="Lorem Ipsum"
                            bgColor="#262626"
                            textColor="#fff"
                            shadowColor="#fff"
                            width="350px"
                        />
                    </div>
                    <div className="relative">
                        <div className="relative w-full h-full z-1">
                            <img src="/img/details/details-bg.png" alt="banner" className="w-full" />
                        </div>
                        <div className="absolute top-68 z-2 right-83 animate-pulse-bounce">
                            <img src="/img/details/hair-band.png" alt="banner" />
                        </div>
                        <div className="absolute top-56 z-1 right-70 animate-pulse-bounce">
                            <img src="/img/details/band.png" alt="banner" />
                        </div>
                        <div className="absolute top-65 z-2 right-92 animate-rotate-15">
                            <img src="/img/banner/ear-ring.png" alt="banner" />
                        </div>
                        <div className="absolute top-62 z-2 left-75 animate-rotate-15">
                            <img src="/img/banner/face.png" alt="banner" />
                        </div>
                        <div className="absolute top-77 z-2 left-20 animate-rotate-15">
                            <img src="/img/details/right-hand.png" alt="banner" />
                        </div>
                        <div className="absolute top-78 z-2 right-31 animate-rotate-345">
                            <img src="/img/details/left-hand.png" alt="banner" />
                        </div>
                        <div className="absolute top-35 left-22 z-2 to-top-animation">
                            <img src="/img/details/img-1.png" alt="banner" />
                        </div>
                        <div className="absolute top-35 z-2 right-13 to-right-animation">
                            <img src="/img/details/img-2.png" alt="banner" />
                        </div>
                        <div className="absolute bottom-50 z-2 right-20 to-bottom-animation">
                            <img src="/img/details/img-3.png" alt="banner" />
                        </div>
                        <div className="absolute bottom-50 z-2 left-20 to-bottom-animation">
                            <img src="/img/details/img-4.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details