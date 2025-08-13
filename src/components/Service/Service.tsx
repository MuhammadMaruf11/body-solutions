import Button from "../ui/Button"


const Service = () => {
    return (
        <section className="bg-[#262626] px-3 2xl:pt-100 xl:pt-80 2xl:pb-50 xl:pb-40 lg:pt-60 lg:pb-30 md:pt-80 md:pb-30 [clip-path:polygon(0_25%,100%_0%,100%_100%,0%_100%)]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="xl:ps-16 lg:ps-8">
                        <p className="text-[#f9b800] xl:text-lg md:text-2xl mb-5">
                            Quisque porttitor vitae vel amet neque scelerisque mattis. <br />
                            Consectetur nibh velit magna consectetur leo.
                        </p>
                        <h4 className="text-white 2xl:text-6xl xl:text-5xl md:text-4xl font-bold xl:mb-15 md:mb-10 xl:leading-18">
                            Cursus Integer Conseq
                            Aliquam Tristique.
                        </h4>
                        <Button
                            label="Lorem Ipsum"
                            bgColor="#fff"
                            textColor="#262626"
                            shadowColor="#f9b800"
                        />
                    </div>
                    <div className="grid grid-cols-12 2xl:gap-15 xl:gap-8 md:gap-3">
                        <div className="col-span-6 flex flex-col 2xl:gap-15 xl:gap-8 md:gap-3 ">
                            <div className="xl:p-12.5 p-8 bg-white xl:rounded-[75px] lg:rounded-[50px] rounded-4xl  relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)]">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-1.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl">
                                        1<span className="text-[#f0b800]">.</span>
                                    </h2>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute  -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>
                            <div className="xl:p-12.5 p-8 bg-[#f0b800] xl:rounded-[75px] lg:rounded-[50px] rounded-4xl relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)]">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-2.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl">
                                        3<span className="text-[#fff]">.</span>
                                    </h2>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>
                        </div>
                        <div className="xl:mt-31 col-span-6 2xl:space-y-15 xl:space-y-8 md:space-y-3 ">
                            <div className="xl:p-12.5 p-8 bg-[#f0b800] xl:rounded-[75px] lg:rounded-[50px] rounded-4xl relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)] overflow-hidden">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-3.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl">
                                        2<span className="text-[#fff]">.</span>
                                    </h2>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute  -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>

                            <div className="xl:p-12.5 p-8 bg-white xl:rounded-[75px] lg:rounded-[50px] rounded-4xl relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)]">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-4.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl">
                                        4<span className="text-[#f0b800]">.</span>
                                    </h2>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute  -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service