import Button from "../ui/Button"


const Footer = () => {
    return (
        <footer className="py-22.5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-22.5">
                    <h4 className="text-5xl leading-15 font-bold">Vulputate et pulvinar ethre Suspendisse tellus consecteur</h4>
                    <div className="ms-auto">
                        <Button
                            label="Lorem Ipsum"
                            bgColor="#f9b800"
                            textColor="#262626"
                            shadowColor="#262626"
                            width="350px"
                        />
                    </div>
                </div>
                <hr className="opacity-12.5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10">
                    <h6 className="text-xl font-bold">Copyright © 2022 Lorem Ipsum.</h6>
                    <h6 className="text-xl ms-auto font-bold">Privacy Policy | Terms and Conditions</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer