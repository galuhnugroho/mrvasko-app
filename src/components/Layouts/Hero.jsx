import SplitText from '../ReactBits/SplitText/SplitText';

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('hi!');
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-12 px-4">
        <img src="/images/hero.png" alt="Hero Image" className="max-w-sm w-full h-auto rounded-lg" />
        <div className="text-center lg:text-left">
          <SplitText
            text="Hi, I'm Galuh Widy Nugroho"
            className="text-3xl sm:text-4xl font-bold"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <p className="py-6 text-lg sm:text-xl">
            A Web Developer Enthusiast currently focused on learning <strong>PHP</strong> and <strong>Laravel</strong>. <br />
            I'm actively building simple projects to sharpen my skills and gain more experience.
          </p>
          <a href="https://www.linkedin.com/in/galuhwnugroho" className="btn btn-neutral" rel="noopener noreferrer" target="_blank">
            Let's Connect!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
