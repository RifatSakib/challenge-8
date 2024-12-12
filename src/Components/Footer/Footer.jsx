
const Footer = () => {
    return (
        <div>

            <footer className=" flex flex-col border-base-300 py-7 text-center space-y-2 ">
                <h1 className="text-3xl font-semibold">Gadget Heaven</h1>
                <p className="text-[rgba(9,8,15,0.6)]">Leading the way in cutting-edge technology and innovation.</p>
            </footer>
            
            <footer className="footer  text-base-content border-base-300 border-t p-10 text-[rgba(9,8,15,0.6)]   ">
                <nav className=" mx-auto">
                    <h6 className=" text-black text-lg font-semibold">Services</h6>
                    <a className="link link-hover bg-">Product Support</a>
                    <a className="link link-hover ">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>


                <nav className=" mx-auto">
                    <h6 className=" text-black text-lg font-semibold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                <nav className=" mx-auto">
                    <h6 className=" text-black text-lg font-semibold">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;