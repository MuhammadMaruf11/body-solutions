

const Testimonial = () => {
    return (
        <section className="bg-linear-to-br px-5 py-10 from-50% to-50% from-brand-dark to-brand-yellow">
            <div className="container mx-auto">
                <div className=" bg-white 2xl:py-25 2xl:px-34 xl:py-20 xl:px-30 lg:py-8 lg:px-12 md:py-4 md:px-8 py-10 px-7 xl:rounded-[75px] lg:rounded-[50px] md:rounded-4xl rounded-[57px] group relative overflow-hidden">
                    <div className="grid grid-cols-12 lg:gap-20 md:gap-3 items-center relative z-10">
                        <div className="md:col-span-5 col-span-12 md:mb-0 mb-10">
                            <img src="/img/testimonial/client-pp.png" alt="client_pp" />
                        </div>
                        <div className="md:col-span-7 col-span-12 group-hover:text-white transition-colors duration-300 md:text-left text-center">
                            <h4 className="xl:text-5xl lg:text-4xl md:text-2xl text-3xl xl:mb-10 lg:mb-6 md:mb-4 mb-7.5">What our <br className="md:hidden" /> customers thought?</h4>
                            <h5 className="xl:text-2xl lg:text-xl mb-5">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. </h5>
                            <button className="group-hover:text-brand-yellow text-xl md:mb-10 mb-7.5">Holly Davidson</button>
                            <div className="flex gap-10 md:justify-start justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="17" viewBox="0 0 40 17" fill="none">
                                    <path d="M0.00012207 8.5L8.3009 0.199219L8.3009 6.44922L39.5509 6.44922V10.5508L8.3009 10.5508L8.3009 16.8008L0.00012207 8.5Z" fill="#262626" className="group-hover:fill-white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="17" viewBox="0 0 41 17" fill="none">
                                    <path d="M40.1017 8.5L31.8009 16.8008V10.5508H0.550903V6.44922H31.8009V0.199219L40.1017 8.5Z" fill="#F9B800" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="absolute group-hover:top-0  left-0 w-[100%] h-[100%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]">
                        <img className=" object-cover w-full h-full object-center" src="/img/testimonial/client-bg.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial