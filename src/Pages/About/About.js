import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 text-justify">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to make high-quality education accessible to everyone, everywhere. We believe that learning should be a lifelong journey, and our platform is designed to provide learners with the tools, resources, and support they need to succeed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our e-learning platform offers a wide range of courses in various disciplines, including technology, business, arts, and more. Each course is carefully curated by industry experts and designed to provide practical, hands-on experience. Whether you're looking to enhance your skills, learn something new, or pursue a passion, we have something for everyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We stand out from the competition by offering a personalized learning experience, with flexible schedules, interactive content, and support from experienced instructors. Our platform is user-friendly, accessible on any device, and designed to keep you engaged and motivated throughout your learning journey.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
              <li>Accessibility: We believe education should be available to all, regardless of location or background.</li>
              <li>Quality: We provide top-notch content developed by experts in the field.</li>
              <li>Flexibility: Learn at your own pace, on your own time.</li>
              <li>Community: We foster a supportive and collaborative learning environment.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in [Year], our platform was created to bridge the gap between traditional education and the evolving needs of the modern learner. What started as a small project has grown into a comprehensive learning platform used by thousands of learners worldwide. Our commitment to innovation and excellence has driven us to continuously improve and expand our offerings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Join Us Today</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're a professional looking to upskill, a student eager to learn more, or a hobbyist pursuing a passion, our platform is here to help you achieve your goals. Join our community today and take the first step towards your future.
            </p>
            <a href="/signup" className="mt-4 inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-200">Get Started</a>
          </section>
        </div>
      </div>
    </div>
    );
};

export default About;