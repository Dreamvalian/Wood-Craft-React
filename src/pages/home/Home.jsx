import React from 'react';
import ImageCarousel from '../../components/Carousel';
import Header from '../../components/Header';
import '../../styles/pages/_home.scss';

const Homepage = () => {
  const HeroSection = ({ headline, tagline }) => {
    return (
      <section className='hero-section'>
        <h1>{headline}</h1>
        <p>{tagline}</p>
        {/* Additional content */}
      </section>
    );
  };

  const AboutSection = ({ description, images }) => {
    return (
      <section className='about-section'>
        <h2>About Us</h2>
        <p>{description}</p>
        {/* Additional content */}
      </section>
    );
  };
  const ProsAndConsSection = ({ pros, cons }) => {
    return (
      <section className='pros-and-cons-section'>
        <h2>Pros and Cons</h2>
        <div>
          <h3>Pros:</h3>
          <ul>
            {pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Cons:</h3>
          <ul>
            {cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  const TestimonialsSection = ({ testimonials }) => {
    return (
      <section className='testimonials-section'>
        <h2>Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
            {/* Additional content */}
          </div>
        ))}
      </section>
    );
  };
  const TrustedCompanySection = ({ companies }) => {
    return (
      <section className='trusted-company-section'>
        <h2>Trusted Companies</h2>
        <div>
          {companies.map((company, index) => (
            <img key={index} src={company.logoUrl} alt={company.name} />
          ))}
        </div>
      </section>
    );
  };

  const items = [
    'https://images.unsplash.com/photo-1650229785916-2cbfe89c72c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxsSWRjX1dEb01qY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1651601787600-40ad979813ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1635373670332-43ea883bb081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80',
  ];

  return (
    <>
      <Header />
      <div className='homepage'>
        <HeroSection
          headline='Specialty Wood Production'
          tagline='Discover the Beauty of Handcrafted Wood Products'
        />
        <ImageCarousel />
        {/* <AboutSection description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' /> */}
        {/* <ProsAndConsSection
          pros={['High-quality craftsmanship', 'Unique and beautiful designs']}
          cons={[
            'Limited availability',
            'Higher prices compared to mass-produced items',
          ]}
        /> */}
        {/* <TestimonialsSection
          testimonials={[
            { name: 'John Doe', feedback: 'Amazing wood craft products!' },
            {
              name: 'Jane Smith',
              feedback: 'Excellent customer service and fast delivery.',
            },
          ]}
        /> */}
        {/* <TrustedCompanySection
          companies={[
            { name: 'Company A', logoUrl: 'company-a-logo.png' },
            { name: 'Company B', logoUrl: 'company-b-logo.png' },
          ]}
        /> */}
      </div>
    </>
  );
};

export default Homepage;
