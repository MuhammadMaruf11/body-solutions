import Button from "../ui/Button"


const Service = () => {
    return (
        <section className="bg-[#262626] 2xl:pt-100 xl:pt-80 2xl:pb-50 xl:pb-40 [clip-path:polygon(0_25%,100%_0%,100%_100%,0%_100%)]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="ps-16">
                        <p className="text-[#f9b800] text-lg mb-5">
                            Quisque porttitor vitae vel amet neque scelerisque mattis. <br />
                            Consectetur nibh velit magna consectetur leo.
                        </p>
                        <h4 className="text-white 2xl:text-6xl xl:text-5xl font-bold mb-15 leading-18">
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
                    <div className="grid grid-cols-12 2xl:gap-15 xl:gap-8">
                        <div className="col-span-6 space-y-15">
                            <div className="p-12.5 bg-white rounded-[75px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)]">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6">
                                        <img src="/img/services/icon-1.png" alt="icon" />
                                    </div>
                                    <h1 className="mb-8 text-6xl">
                                        1<span className="text-[#f0b800]">.</span>
                                    </h1>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute  -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>
                            <div className="p-12.5 bg-[#f0b800] rounded-[75px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)]">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6">
                                        <img src="/img/services/icon-2.png" alt="icon" />
                                    </div>
                                    <h1 className="mb-8 text-6xl">
                                        3<span className="text-[#fff]">.</span>
                                    </h1>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 mt-31 space-y-15">
                            <div className="p-12.5 bg-[#f0b800] rounded-[75px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)]">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6">
                                        <img src="/img/services/icon-3.png" alt="icon" />
                                    </div>
                                    <h1 className="mb-8 text-6xl">
                                        2<span className="text-[#fff]">.</span>
                                    </h1>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute  -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>

                            <div className="p-12.5 bg-white rounded-[75px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)]">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6">
                                        <img src="/img/services/icon-4.png" alt="icon" />
                                    </div>
                                    <h1 className="mb-8 text-6xl">
                                        4<span className="text-[#f0b800]">.</span>
                                    </h1>
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