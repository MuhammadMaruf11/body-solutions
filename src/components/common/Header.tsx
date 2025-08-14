const Header = () => {
    return (
        <header className="xl:py-15 lg:py-6 py-12.5 px-5">
            <div className="container mx-auto bg-white py-3 px-5.5 rounded-full relative lg:text-center">
                <div className="inline-block">
                    <img className="md:w-32 w-24" src="/img/logo/logo.png" alt="logo" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-7.5 flex gap-3">
                    <img src="/img/icons/flag.png" alt="icon" />
                    <img src="/img/icons/arrow_drop_down.svg" alt="icon" />
                </div>
            </div>
        </header>
    )
}

export default Header