import { useState } from "react";
import Button from "../ui/Button"
import { bannerData } from "../../data/bannerData";


const Details = () => {

      // All items
        const [items, setItems] = useState(bannerData.map((item) => item.title));
           const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
    
        // Toggle selection
        const handleSelect = (index: number) => {
            if (selectedIndexes.includes(index)) {
                setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
            } else {
                setSelectedIndexes([...selectedIndexes, index]);
            }
        };
    
        // Remove non-selected items
        const handleButtonClick = () => {
            // Keep only selected items
            const newItems = items.filter((_, index) => selectedIndexes.includes(index));
    
            // Update items
            setItems(newItems);
    
            // Reset selectedIndexes to match empty array
            setSelectedIndexes([]);
    };
    
    return (
        <section className="bg-brand-yellow pt-10 xl:pb-100 md:pb-50 pb-30 lg:[clip-path:polygon(0_0%,100%_0%,100%_75%,0%_100%)] md:[clip-path:polygon(0_0%,100%_0%,100%_85%,0%_100%)] [clip-path:polygon(0_0%,100%_0%,100%_95%,0%_100%)]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="xl:ps-16 lg:ps-8 px-5 lg:order-1 order-2">
                        <h4 className="2xl:text-5xl text-4xl 2xl:leading-15 leading-12 2xl:mb-15 xl:mb-10 mb-7.5">Cursus Integer <br />
                            consequat <br className="md:hidden" /> Tristique.</h4>
                        <ul className="flex flex-wrap gap-3.5 2xl:mb-15 mb-10 2xl:text-xl xl:text-xl lg:text-base">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    className={`flex items-center gap-2 ps-3 xl:pe-6 pe-3 py-3 rounded-full cursor-pointer
                    ${selectedIndexes.includes(index) ? "bg-brand-dark text-white" : "bg-white"}`}
                                >
                                    <img
                                        className="xl:w-6.5 lg:w-5"
                                        src="/img/icons/check_circle.svg"
                                        alt="icon"
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button
                            disabled={selectedIndexes.length === 0}
                            label="Lorem Ipsum"
                            bgColor="#262626"
                            textColor="#fff"
                            shadowColor="#262626"
                            onclick={handleButtonClick}
                        />
                    </div>
                    <div className="relative lg:order2 order-1">
                        <div className="relative w-full h-full z-1">
                            <img src="/img/details/details-bg.png" alt="banner" className="w-full" />
                        </div>
                        <div className="absolute z-2 2xl:top-68 2xl:right-83 xl:top-56 xl:right-70 lg:top-45 lg:right-56 md:top-70 md:right-85 top-34 right-42 2xl:w-5.5 xl:w-4.5 lg:w-3 md:w-5 w-2 animate-pulse-bounce">
                            <img src="/img/details/hair-band.png" alt="banner" />
                        </div>
                        <div className="absolute z-1 2xl:top-56 2xl:right-70 xl:top-47 xl:right-60 lg:top-38 lg:right-48 md:top-58 md:right-74 top-28 right-35 2xl:w-17 xl:w-13 lg:w-10 md:w-15 w-7.5 animate-pulse-bounce">
                            <img src="/img/details/band.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-65 2xl:right-92 xl:top-54 xl:right-76 lg:top-43 lg:right-61 md:top-66 md:right-93 top-32 right-45.5 2xl:w-4 xl:w-3 lg:w-2.5 md:w-4 w-1.5 animate-rotate-15">
                            <img src="/img/banner/ear-ring.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-62 2xl:left-75 xl:top-52 xl:left-62 lg:top-41 lg:left-50 md:top-63 md:left-77 top-31 left-37.5 2xl:w-10 xl:w-8.5 lg:w-7 md:w-10 w-5 animate-rotate-15">
                            <img src="/img/banner/face.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-77 2xl:left-20 xl:top-64 xl:left-17 lg:top-55 lg:left-19 md:top-81 md:left-24 top-41.5 left-15 2xl:w-50 xl:w-40 lg:w-25 md:w-45 w-18 animate-rotate-15">
                            <img src="/img/details/right-hand.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-78 2xl:right-31 xl:top-65 xl:right-26 lg:top-56 lg:right-26 md:top-82 md:right-35 top-42 right-20 2xl:w-50 xl:w-40 lg:w-25 md:w-45 w-18 animate-rotate-345">
                            <img src="/img/details/left-hand.png" alt="banner" />
                        </div>
                        <div className="absolute 2xl:top-35 2xl:left-22 xl:top-30 xl:left-17 lg:top-30 lg:left-15 md:top-45 md:left-25 top-22 left-10 2xl:w-38.5 xl:w-35 lg:w-25 md:w-37 w-20 z-2 to-top-animation">
                            <img src="/img/details/img-1.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:top-35 2xl:right-13 xl:top-30 xl:right-10 lg:top-25 lg:right-10 md:top-40 md:right-20 top-20 right-7 2xl:w-53 xl:w-45 lg:w-35 md:w-50 w-27 to-right-animation">
                            <img src="/img/details/img-2.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:bottom-50 2xl:right-20 xl:bottom-40 xl:right-15 lg:bottom-35 lg:right-15 md:bottom-52 md:right-25 bottom-30 right-10 2xl:w-24 xl:w-20 lg:w-15 md:w-22 w-10 to-bottom-animation">
                            <img src="/img/details/img-3.png" alt="banner" />
                        </div>
                        <div className="absolute z-2 2xl:bottom-50 2xl:left-20 xl:bottom-40 xl:left-15 lg:bottom-35 lg:left-15 md:bottom-52 md:left-25 bottom-30 left-10 2xl:w-20 xl:w-15 lg:w-10 md:w-17 w-7.5 to-bottom-animation">
                            <img src="/img/details/img-4.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details