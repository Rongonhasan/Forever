
import Title from '../components/Title'; // Assuming you have a Title component

import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const ContactUsPage = () => {
  return (
    <>
       <div className="max-w-7xl mx-auto px-4 py-10 border-t">
      {/* Contact Us Title */}
      <div className="mb-10 flex justify-center items-center text-2xl">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.contact_img}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Contact Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mt-6">Our Store</h1>
          <p className="text-gray-700 mt-2">54709 Willms Station</p>
          <p className="text-gray-700">Bogura, Bangladesh</p>
          
          <p className="text-gray-700 mt-5">Tel: 01793-324222</p>
          <p className="text-gray-700">Email: rongon@forever.com</p>
          
          <h1 className="text-2xl font-semibold mt-10">Careers at Forever</h1>
          <p className="text-gray-700 mt-2">Learn more about our teams and job openings.</p>
          
          <button className="border border-black text-black px-8 py-2 mt-5 hover:bg-black hover:text-white transition duration-300">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
    <NewsletterBox></NewsletterBox>
    </>
 
  );
};

export default ContactUsPage;
