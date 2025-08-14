import Button from "../ui/Button"


const Service = () => {
    return (
        <section className="bg-brand-dark px-5 2xl:pt-100 xl:pt-80 2xl:pb-50 xl:pb-40 lg:pt-60 lg:pb-30 md:pt-60 md:pb-30 pt-40 pb-20 lg:[clip-path:polygon(0_25%,100%_0%,100%_100%,0%_100%)] md:[clip-path:polygon(0_15%,100%_0%,100%_100%,0%_100%)] [clip-path:polygon(0_5%,100%_0%,100%_100%,0%_100%)]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-14 items-center">
                    <div className="xl:ps-16 lg:ps-8">
                        <p className="text-brand-yellow xl:text-lg md:text-2xl text-xl mb-5">
                            Quisque porttitor vitae vel amet neque scelerisque mattis. <br />
                            Consectetur nibh velit magna consectetur leo.
                        </p>
                        <h4 className="text-white 2xl:text-6xl xl:text-5xl text-4xl font-bold xl:mb-15 md:mb-10 mb-7.5 xl:leading-18 leading-12">
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
                    <div className="grid grid-cols-12 2xl:gap-15 xl:gap-8 md:gap-3 gap-7.5">
                        <div className="md:col-span-6 col-span-12 flex flex-col 2xl:gap-15 xl:gap-8 md:gap-3 gap-7.5">
                            <div className="xl:p-12.5 md:p-8 p-12 bg-white xl:rounded-[75px] lg:rounded-[50px] md:rounded-4xl rounded-[60px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)] delay-bg-change overflow-hidden">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-1.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl text-5xl">
                                        1<span className="text-brand-yellow">.</span>
                                    </h2>
                                    <h4 className="text-2xl mb-5">Phasellus Vitae</h4>
                                    <h6 className="text-lg mb-.5">Quisque</h6>
                                    <p>Porttitor vitae vel amet</p>
                                </div>
                                <div className="absolute  -left-1 w-[102%] h-[135%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:top-0">
                                    <img className="w-full h-full object-cover" src="/img/services/card-bg.png" alt="bg" />
                                </div>
                            </div>
                            <div className="xl:p-12.5 md:p-8 p-12 bg-brand-yellow xl:rounded-[75px] lg:rounded-[50px] md:rounded-4xl rounded-[60px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)] delay-bg-change overflow-hidden">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-2.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl text-5xl">
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
                        <div className="xl:mt-31 md:col-span-6 col-span-12 flex flex-col 2xl:gap-15 xl:gap-8 md:gap-3 gap-7.5">
                            <div className="xl:p-12.5 md:p-8 p-12 bg-brand-yellow xl:rounded-[75px] lg:rounded-[50px] md:rounded-4xl rounded-[60px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)] delay-bg-change overflow-hidden">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-3.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl text-5xl">
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
                            <div className="xl:p-12.5 md:p-8 p-12 bg-white xl:rounded-[75px] lg:rounded-[50px] md:rounded-4xl rounded-[60px] relative group shadow-[20px_20px_20px_rgba(0,0,0,0.1),-20px_-20px_20px_rgba(0,0,0,0.1)] delay-bg-change overflow-hidden">
                                <div className="relative z-2 group-hover:text-white transition-colors duration-300">
                                    <div className="2xl:mb-10 xl:mb-6 lg:mb-4 mb-8">
                                        <img src="/img/services/icon-4.png" width={50} height={50} alt="icon" />
                                    </div>
                                    <h2 className="xl:mb-8 lg:mb-4 mb-8 xl:text-6xl md:text-4xl text-5xl">
                                        4<span className="text-brand-yellow">.</span>
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