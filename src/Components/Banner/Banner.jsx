import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='relative mb-96'>
{/* banner info */}
            <div className="bg-[rgb(149,56,226)] text-white space-y-8 text-center p-10 pb-60 rounded-b-3xl">
                <h1 className="text-6xl mx-auto font-bold  md:w-10/12">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="md:w-6/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn rounded-full text-[rgb(149,56,226)] font-semibold ">Shop Now</button>
            </div>


{/* banner image */}


            <div className='absolute left-[10%] top-[70%] h-[473px] w-[962px] p-4 border rounded-xl'>
                <img className='w-full h-full rounded-xl'   src={bannerImg} alt="This is a image" />

            </div>
        </div>

    );
};

export default Banner;