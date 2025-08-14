import Button from "../ui/Button"

const Footer = () => {
    return (
        <footer className="xl:py-22.5 py-12.5 px-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center xl:mb-22.5 lg:mb-12 md:mb-6">
                    <h4 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-4xl 2xl:leading-15 leading-12 font-bold">Vulputate et pulvinar ethre Suspendisse tellus consecteur</h4>
                    <div className="md:ms-auto">
                        <Button
                            label="Lorem Ipsum"
                            bgColor="#f9b800"
                            textColor="#262626"
                            shadowColor="#262626"
                        />
                    </div>
                </div>
                <hr className="opacity-12.5" />
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 items-center mt-10">
                    <h6 className="2xl:text-xl lg:text-lg font-bold">Copyright © 2022 Lorem Ipsum.</h6>
                    <h6 className="2xl:text-xl lg:text-lg md:ms-auto font-bold">Privacy Policy | Terms and Conditions</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer