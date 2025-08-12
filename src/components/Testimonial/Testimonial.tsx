

const Testimonial = () => {
    return (
        <section className="bg-linear-to-br from-50% to-50% from-[#262626] to-[#f9b800]">
            <div className="container mx-auto">
                <div className=" bg-white py-25 px-34 rounded-[75px] group relative overflow-hidden">
                    <div className="grid grid-cols-12 gap-20 items-center relative z-10">
                        <div className="col-span-5">
                            <img src="/img/testimonial/client-pp.png" alt="client_pp" />
                        </div>
                        <div className="col-span-7 group-hover:text-white transition-colors duration-300">
                            <h4 className="text-5xl mb-10">What our customers thought?</h4>
                            <h5 className="text-2xl mb-5">Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. </h5>
                            <button className="group-hover:text-[#f9b800] text-xl mb-10">Holly Davidson</button>
                            <div className="flex gap-10 items-center">
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
                        <img src="/img/testimonial/client-bg.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial