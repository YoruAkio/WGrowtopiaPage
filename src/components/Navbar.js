export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-2/3 bg-black bg-opacity-25 backdrop-filter backdrop-blur-md rounded-3xl px-4 sm:px-8 py-1 sm:py-2 shadow-lg z-10 flex items-center justify-center">
            <img src="/gtps-logo.png" alt="Growtopia Private Server Logo" className="w-24 absolute left-0 top-1/2 transform -translate-y-1/2 ml-5" />
            <div className="flex justify-center items-center w-full">
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Information</a></li>
                    <li><a href="#" className="hover:underline">Statistic</a></li>
                    <li><a href="#" className="hover:underline">Marketplace</a></li>
                </ul>
            </div>
            <button className="btn btn-primary rounded-xl w-24 h-8">Connect</button>
        </nav>
    );
}