import React from 'react';
import FAQSection from './FAQSection';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-black text-light min-h-screen">
      {/*Navbar */}
        < Navbar/>

      {/* Call-to-action section */}
      <section className="flex flex-col items-center justify-center text-center mt-44 ">
        <h2 className="text-5xl">Get guidance. Stay informed.</h2>
        <p className="text-2xl mt-4">
          Simplify your admissions journey. <br />
          Free to use. Easy to try. Just ask and get the information you need to start your admissions journey.
        </p>
        <div className="mt-6">
          <button className="bg-secondary text-dark px-4 py-2 rounded-md shadow-md hover:bg-light">
            Register
          </button>
          <button className="ml-4 bg-secondary text-dark px-4 py-2 rounded-md shadow-md hover:bg-light">
            Login
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative mt-24 bg-dark text-light py-10">
        <FAQSection />
      </section>
    </div>
  );
};

export default Home;
