import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mt-6 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-700">
            Welcome to Campease! Discover who we are and what drives us.
          </p>
          <img
            src="https://i.ibb.co.com/8KySN43/About.webp"
            alt="About Us"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </section>

        {/* Our Story Section */}
        <section>
          <h2 className="text-2xl font-semibold py-8 text-blue-600">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <img
                src="https://i.ibb.co.com/Ct189tw/story.jpg"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Founded in 2020, Campease has rapidly grown and established
                itself as a leader in the industry. Our mission is to provide
                top-notch services and build lasting relationships with our
                clients.
              </p>
              <p className="text-lg text-gray-700">
                We believe in innovation, excellence, and customer satisfaction.
                Our team is committed to delivering high-quality solutions and
                exceptional support.
              </p>
            </div>
          </div>
        </section>
        {/* Mission Statement Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Campease, our mission is to deliver top-quality products and
            services while maintaining a deep commitment to customer
            satisfaction, innovation, and environmental sustainability. We
            strive to exceed expectations in everything we do.
          </p>
        </section>
        {/* Meet the Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://media.istockphoto.com/id/637933814/photo/portrait-of-businessman-smiling-in-business-office.jpg?s=1024x1024&w=is&k=20&c=_xflfrkbjQP4SYH_3KwUTvpUyuGIUqH6d4uz3NpSXno="
                alt="Team Member 1"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://media.istockphoto.com/id/2161012915/photo/studio-waist-up-portrait-of-a-businessman-with-crossed-arms-business-concept-black-background.jpg?s=1024x1024&w=is&k=20&c=v1auqxSzVH3XllG4gtmFSK9IzowtFZLZG47m2S27lMs="
                alt="Team Member 2"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                John Smith
              </h3>
              <p className="text-gray-600">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://media.istockphoto.com/id/1500308602/photo/happy-black-man-mature-or-portrait-in-finance-office-about-us-company-profile-picture-or-ceo.jpg?s=1024x1024&w=is&k=20&c=KYbEa2aQlbIOSGsCYD0Oc2Cz4jUjYD9uOIimOGlP3gc="
                alt="Team Member 3"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Alice Johnson
              </h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </section>

        {/* Contact Information & Map Section */}
        <section>
          <h2 className="text-2xl py-8 font-semibold text-blue-600">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin size={24} className="text-blue-600 mr-2" />
                  <span>238/1 Begum Rokeya Sharani, Agargaon, Dhaka-1207</span>
                </li>
                <li className="flex items-center">
                  <Phone size={24} className="text-blue-600 mr-2" />
                  <span>+88096225566</span>
                </li>
                <li className="flex items-center">
                  <Mail size={24} className="text-blue-600 mr-2" />
                  <span>campease@gmail.com</span>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="mt-6">
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook
                      size={28}
                      className="text-blue-600 hover:text-blue-800"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter
                      size={28}
                      className="text-blue-600 hover:text-blue-800"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram
                      size={28}
                      className="text-blue-600 hover:text-blue-800"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={28}
                      className="text-blue-600 hover:text-blue-800"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8383059414894!2d90.37757317509797!3d23.751118584589308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74dd688ace1%3A0x103acc13a367ce7b!2sBegum%20Rokeya%20Sarani!5e0!3m2!1sen!2sbd!4v1694173337765!5m2!1sen!2sbd"
                width="100%"
                height="250"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
