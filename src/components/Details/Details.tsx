import Button from "../ui/Button"


const Details = () => {
    return (
        <section className="bg-[#f9b800] pt-10 xl:pb-100 lg:pb-50 [clip-path:polygon(0_0%,100%_0%,100%_75%,0%_100%)]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="ps-16">
                        <h4 className="2xl:text-5xl lg:text-4xl 2xl:leading-15 2xl:mb-15 xl:mb-10 lg:mb-6">Cursus Integer <br />
                            consequat Tristique.</h4>
                        <ul className="flex flex-wrap gap-3.5 2xl:mb-15 xl:mb-10 lg:mb-6 2xl:text-xl xl:text-xl lg:text-base">
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Ac viverra sed risus praesent vulputate. </span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Natoqu consectetur pulvinar. </span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Sollicitudin ornare tempus nulla varius pulvinar.</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Varius pulvinar</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Natoque id tellus consectetur</span>
                            </li>
                            <li className="flex items-center gap-2 bg-white ps-3 xl:pe-6 pe-3 py-3 rounded-full ">
                                <img className="xl:w-6.5 lg:w-5" src="/img/icons/check_circle.svg" alt="icon" />
                                <span>Vulputate et vulputate suspendisse</span>
                            </li>
                        </ul>
                        <Button
                            label="Lorem Ipsum"
                            bgColor="#262626"
                            textColor="#fff"
                            shadowColor="#fff"
                        />
                    </div>
                    <div className="relative">
                        <div className="relative w-full h-full z-1">
                            <img src="/img/details/details-bg.png" alt="banner" className="w-full" />
                        </div>
                        <div className="absolute z-2 2xl:top-68 2xl:right-83 xl:top-56 xl:right-70 lg:top-45 lg:right-56 2xl:w-5.5 xl:w-4.5 lg:w-3 animate-pulse-bounce">
                            <img src="/img/details/hair-band.png" alt="banner" />
                        </div>
                        <div className="absolute z-1 2xl:top-56 2xl:right-70 xl:top-47 xl:right-60 lg:top-38 lg:right-48 2xl:w-17 xl:w-13 lg:w-10 animate-pulse-bounce">
                            <img src="/img/details/band.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-65 2xl:right-92 xl:top-54 xl:right-76 lg:top-43 lg:right-61 2xl:w-4 xl:w-3 lg:w-2.5 animate-rotate-15">
                            <img src="/img/banner/ear-ring.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-62 2xl:left-75 xl:top-52 xl:left-62 lg:top-41 lg:left-50 2xl:w-10 xl:w-8.5 lg:w-7 animate-rotate-15">
                            <img src="/img/banner/face.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-77 2xl:left-20 xl:top-64 xl:left-17 lg:top-55 lg:left-19 2xl:w-50 xl:w-40 lg:w-25 animate-rotate-15">
                            <img src="/img/details/right-hand.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-78 2xl:right-31 xl:top-65 xl:right-26 lg:top-56 lg:right-26 2xl:w-50 xl:w-40 lg:w-25 animate-rotate-345">
                            <img src="/img/details/left-hand.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:top-35 2xl:left-22 xl:top-30 xl:left-17 lg:top-30 lg:left-15 2xl:w-38.5 xl:w-35 lg:w-25 z-2 to-top-animation">
                            <img src="/img/details/img-1.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-35 2xl:right-13 xl:top-30 xl:right-10 lg:top-25 lg:right-10 2xl:w-53 xl:w-45 lg:w-35 to-right-animation">
                            <img src="/img/details/img-2.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:bottom-50 2xl:right-20 xl:bottom-40 xl:right-15 lg:bottom-35 lg:right-15 2xl:w-24 xl:w-20 lg:w-15 to-bottom-animation">
                            <img src="/img/details/img-3.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:bottom-50 2xl:left-20 xl:bottom-40 xl:left-15 lg:bottom-35 lg:left-15 2xl:w-20 xl:w-15 lg:w-10 to-bottom-animation">
                            <img src="/img/details/img-4.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details