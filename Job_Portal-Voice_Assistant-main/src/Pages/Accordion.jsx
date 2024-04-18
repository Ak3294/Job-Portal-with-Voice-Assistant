import React from 'react';
import AccordionD from './accordianD';
import "../App"
import { FaAlignCenter } from 'react-icons/fa6';

const accordionData = [
  {
    title: 'Our Team',
    content: `
    At Acube, our team embodies expertise and dedication. Akshat Sharma leads development, pioneering innovation and technical excellence. Akshay Kumar Hiran oversees operations, ensuring seamless functionality and top-tier service delivery. Aditya Singh Chouhan spearheads PR and communication efforts, crafting compelling narratives and nurturing relationships. Together, they form a cohesive unit, driving our company forward with a shared commitment to excellence. Their collective skills and unwavering dedication play pivotal roles in shaping our future, fostering growth, and delivering value to our users and partners alike.
    `
  },
  {
    title: 'Our Values',
    content: `At Acube, our values serve as the foundation of everything we do. We are committed to transparency, ensuring honesty and integrity in all our interactions with users and partners. Diversity and inclusion are paramount to us, as we strive to create an environment where everyone feels valued and respected, regardless of background or identity.

    Innovation fuels our work, driving us to constantly push boundaries and explore new possibilities in the realm of recruitment. We embrace creativity and forward thinking, seeking out novel solutions to address the evolving needs of job seekers and employers. Above all, we are dedicated to excellence, consistently delivering high-quality services and experiences that exceed expectations and leave a positive impact on individuals and organizations alike..`
  },
  {
    title: 'Our Mission',
    content: `At Acube, we're driven by a singular mission: to transform the recruitment landscape for both job seekers and employers alike. In a world where finding the right fit can be daunting, we're dedicated to simplifying the process and fostering connections that lead to meaningful employment opportunities and thriving businesses.

    Our vision extends beyond mere job matching; we aspire to create an ecosystem where talent and opportunity intersect seamlessly. By harnessing the power of cutting-edge technology and personalized algorithms, we're committed to providing a platform that empowers individuals to navigate their career paths with confidence and clarity..`
  },
  {
    title: 'Our Approach',
    content: `At Acube, our approach to revolutionizing recruitment is rooted in innovation and user-centric design. Through the integration of cutting-edge technology and sophisticated algorithms, we prioritize efficiency and effectiveness in matching candidates with their ideal roles. Our platform offers customizable filters and personalized recommendations, ensuring a tailored experience for both job seekers and employers.

    We believe in the power of combining technology with human expertise. By harnessing the strengths of automation and personalization, we aim to streamline the hiring process while maintaining a human touch. Our commitment to excellence drives us to continuously enhance our platform, providing a seamless and transparent experience for individuals and organizations alike`
  },
  ,
  {
    title: 'How to get started',
    content: `
    The process begins with users signing up or logging in to access personalized features. They enter personal details and upload resumes, enhancing their profiles. Using an intuitive interface, they filter job listings based on preferences. Leveraging advanced algorithms, the platform matches users with relevant job openings and companies. Users can then send resumes directly to targeted companies, receiving confirmation notifications. Feedback mechanisms and comprehensive support ensure a streamlined job search experience.`
  }
];

const Accordian = () => {
  return (
    <div className='accordian'>
      <h1>About Us</h1>
      <div className="accordion-container">
        {accordionData.map(({ title, content }) => (
          <AccordionD title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Accordian;