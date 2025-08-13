const Header = () => {
    return (
        <header className="xl:py-15 lg:py-6 py-12.5 px-3">
            <div className="container mx-auto bg-white py-2 rounded-full relative text-center">
                <div className="inline-block">
                    <img src="/img/logo/logo.png" alt="logo" />
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