import { Fragment, Suspense } from 'react';
import Navbar from '../components/Layouts/Navbar';
import SplashCursor from '../components/ReactBits/SplashCursor/SplashCursor';

const About = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      {/* <Header>About Me</Header> */}

      <SplashCursor />

      <div className="w-full m-0 px-4 lg:px-0">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 max-w-screen-lg mx-auto">
            {' '}
            {/* Membatasi lebar maksimum */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg sm:text-xl space-y-4">
                <span className="block">
                  Halo, saya <strong>Galuh Widy Nugroho</strong>. Sebagai lulusan baru Teknik Informatika, saya sedang mengejar mimpi untuk menjadi seorang <strong>backend developer</strong> handal. Saya percaya bahwa setiap orang harus
                  memulai dari nol, dan saya senang berada dalam proses belajar tersebut.
                </span>

                <span className="block">
                  <strong>Laravel</strong> menjadi teman terbaik saya sejauh ini dalam memahami cara kerja backend dan API. Saya menikmati proses membangun aplikasi, mempelajari alur kerja data dalam sistem, serta mencari solusi terbaik
                  untuk kebutuhan sistem.
                </span>

                <span className="block">
                  Selain Laravel, saya terus mempelajari tools penting lain seperti <strong>Git</strong>, <strong>SQL</strong>, dan tahapan <strong>deployment ke production</strong>. Saya juga sedang mendalami <strong>JavaScript</strong>{' '}
                  untuk memperluas pemahaman saya tentang interaksi frontend dan backend.
                </span>

                <span className="block">Saya menyukai tantangan, terbuka terhadap feedback, dan memiliki semangat tinggi untuk terus berkembang di industri teknologi.</span>
              </p>

              <button className="btn btn-neutral mt-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
