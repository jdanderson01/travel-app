import React from "react";

const BookNow = () => {
  return (
    <section className="flexCenter flex-col bg-blue-900 text-white mb-10 py-10 px-5 md:px-10 rounded-lg shadow-lg max-w-md mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-2 text-center">Book Your Journey Today!</h2>
      <p className="text-center mb-6 text-blue-200">
        Ready for an adventure? Secure your spot in space with just one click.
      </p>
      <button className="bg-white text-black font-semibold py-3 px-8 rounded-full transition duration-200">
        Book Now
      </button>
    </section>
  );
};

export default BookNow;
