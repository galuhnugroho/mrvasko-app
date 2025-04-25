import { Fragment, useState } from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Navbar from '../components/Layouts/Navbar';
import SplashCursor from '../components/ReactBits/SplashCursor/SplashCursor';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'galuhwidynugroho@gmail.com'; // ganti dengan emailmu

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Fragment>
      <Navbar />
      <SplashCursor />
      <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-lg sm:text-md mb-8 text-center max-w-xl">Feel free to connect with me on social media or copy my email below.</p>

        {/* Ikon Sosial Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/galuhnugroho" target="_blank" rel="noopener noreferrer" className="hover:text-neutral transition-all duration-300">
            <Github size={32} />
          </a>
          <a href="https://instagram.com/mrvdev" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all duration-300">
            <Instagram size={32} />
          </a>
          <a href="https://linkedin.com/in/galuhwnugroho" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all duration-300">
            <Linkedin size={32} />
          </a>
        </div>

        {/* Email dan Copy Button */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center space-y-4 sm:space-y-0">
          <span className="text-md bg-base-100 py-2 px-4 rounded shadow">{email}</span>
          <button onClick={handleCopy} className="btn btn-sm btn-outline flex items-center space-x-2">
            <Mail size={18} />
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
