const AboutUs = () => {
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold  text-center mb-10">Who we are?</h2>
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About Us"
              />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 md:pl-8 mt-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
              <p className="text-lg leading-relaxed mb-4">
                Telemedicine, propelled by technological innovations, is
                revolutionizing healthcare delivery. With virtual consultations
                and remote monitoring, patients can access quality care from the
                comfort of their homes. This shift not only improves
                accessibility but also enhances efficiency in healthcare
                delivery, marking a significant step towards a more
                patient-centric approach..
              </p>
              <p className="text-lg leading-relaxed">
                Medical wellness promotes holistic health, emphasizing
                prevention and self-care alongside traditional treatments. It
                integrates nutrition, exercise, and mindfulness to optimize
                overall well-being. By empowering individuals with knowledge and
                tools, medical wellness fosters a proactive approach to health
                management.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
