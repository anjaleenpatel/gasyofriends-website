import React from 'react';
import './HowItWorks.css'; // Import the CSS file for styling

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      <h1>How It Works</h1>
      <p>Welcome to our service, a platform dedicated to fostering kindness and positivity through anonymous compliments. In today's fast-paced world, a kind word can go a long way, and our service aims to make it easier than ever to share and receive positive messages. Here's how it works:</p>
      
      <h2>SIGNUP: To sign up for the service</h2>
      <p><strong>How:</strong> Simply text <code>SIGNUP</code> to our service number.</p>
      <p><strong>What Happens Next:</strong> You'll be registered in our system and ready to start sending and receiving compliments.</p>

      <h2>SEND: To send a compliment</h2>
      <p><strong>How:</strong> Text <code>SEND</code> followed by the number of the person you want to compliment and the compliment.</p>
      <p><strong>What Happens Next:</strong> Your message will be sent anonymously to the recipient, spreading positivity without revealing your identity.</p>

      <h2>VIEW [Compliment ID]: To view a received compliment</h2>
      <p><strong>How:</strong> Text <code>VIEW [Compliment ID]</code> to see a specific compliment you have received.</p>
      <p><strong>What Happens Next:</strong> You'll receive the content of the compliment associated with that ID, allowing you to read and appreciate the kind words sent your way.</p>

      <h2>COMPLIMENTS: To view all the IDs of the compliments that you have ever received</h2>
      <p><strong>How:</strong> Text <code>COMPLIMENTS</code> to our service number.</p>
      <p><strong>What Happens Next:</strong> You'll receive a list of all compliment IDs you've received, making it easy to keep track of the positive messages you've accumulated over time.</p>

      <h2>REPORT [Compliment ID]: To report a received compliment</h2>
      <p><strong>How:</strong> Text <code>REPORT [Compliment ID]</code> if you receive a message that is inappropriate or offensive.</p>
      <p><strong>What Happens Next:</strong> Our team will review the reported compliment and take appropriate action to ensure the integrity and positivity of our service.</p>

      <h2>STOP: To opt out of the service</h2>
      <p><strong>How:</strong> Text <code>STOP</code> to our service number.</p>
      <p><strong>What Happens Next:</strong> You'll be unsubscribed from our service, and you will no longer receive or be able to send compliments.</p>

      <h2>HELP: To view this menu again</h2>
      <p><strong>How:</strong> Text <code>HELP</code> to our service number.</p>
      <p><strong>What Happens Next:</strong> You'll receive a message with all the commands and instructions, ensuring you can always find the information you need to use our service effectively.</p>

      <h2>Our Commitment to Your Privacy</h2>
      <p>We promise to respect your privacy and will only send text messages if you explicitly opt-in to our service. Your participation is entirely voluntary, and you have full control over your engagement. We are committed to creating a safe and positive experience for all users. By opting in, you agree to receive and send compliments through our service, but you can opt out at any time by texting <code>STOP</code>.</p>

      <p>Our mission is to create a safe and welcoming environment where people can uplift one another through simple, yet meaningful, acts of kindness. Whether it's a small compliment that brightens someone's day or a heartfelt message that makes a lasting impact, every word counts. Join us in spreading positivity and making the world a little kinder, one compliment at a time.</p>
    </div>
  );
};

export default HowItWorks;
