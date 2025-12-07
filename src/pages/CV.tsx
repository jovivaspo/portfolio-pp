export const CV = () => {
  return (
    <div className='max-w-4xl mx-auto px-6 py-12 md:px-8 md:py-16'>
      {/* Header */}
      <header className='mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>Pablo Pocostales</h1>
        <div className='flex items-center gap-4 mb-4'>
          <h2 className='text-2xl md:text-3xl text-my-gray'>Curriculum Vitae</h2>
          <a href='/CV-Pablo-Pocostales-2023.pdf' target='_blank' rel='noopener noreferrer' className='text-sm text-black hover:text-my-gray transition-colors duration-300'>
            (PDF)
          </a>
        </div>

        <p className='text-my-gray text-lg mb-4'>Videographer // Video Editor // Graphic Designer</p>

        {/* Contact Info */}
        <div className='text-my-gray text-sm mb-8'>
          <p>pocostales7@gmail.com</p>
          <p>+34 654 70 87 32</p>
          <p>Born: November 1989</p>
          <p>Based in Howald, Luxembourg</p>
        </div>
      </header>

      {/* Profile */}
      <section className='mb-12'>
        <h3 className='text-xl font-bold mb-6 uppercase'>Profile</h3>
        <p className='text-my-gray leading-relaxed'>
          I consider myself a professional filmmaker with extensive experience in camera operation, sound equipment, and scene lighting. I completed my studies in 2012, and since then, I have been
          continuously specializing and furthering my education in the audiovisual field up to the present day.
        </p>
      </section>

      {/* Experience Section */}
      <section className='mb-12'>
        <h3 className='text-xl font-bold mb-6 uppercase'>Experience</h3>
        <div className='space-y-6'>
          <div>
            <div className='flex flex-col md:flex-row md:gap-4 mb-2'>
              <span className='text-black font-medium min-w-[140px]'>Nov 2018 - Present</span>
              <div>
                <p className='text-black font-medium'>Videographer & Multimedia Designer</p>
                <p className='text-my-gray'>Deloitte // Luxembourg</p>
              </div>
            </div>
            <p className='text-my-gray md:ml-[156px]'>Video filming and editing for the branding department. Creation of motion design and promotional videos for social media.</p>
          </div>

          <div>
            <div className='flex flex-col md:flex-row md:gap-4 mb-2'>
              <span className='text-black font-medium min-w-[140px]'>Apr 2017 - Nov 2018</span>
              <div>
                <p className='text-black font-medium'>Videographer & Graphic Designer</p>
                <p className='text-my-gray'>Freelancer // Spain</p>
              </div>
            </div>
            <p className='text-my-gray md:ml-[156px]'>Video creation and editing, logo design and development, catalog layout for web pagination, and social media.</p>
          </div>

          <div>
            <div className='flex flex-col md:flex-row md:gap-4 mb-2'>
              <span className='text-black font-medium min-w-[140px]'>Mar 2013 - Apr 2016</span>
              <div>
                <p className='text-black font-medium'>Cameraman & Video Editor</p>
                <p className='text-my-gray'>Alcor Extremadura Raid // Spain</p>
              </div>
            </div>
            <p className='text-my-gray md:ml-[156px]'>Recording and editing of promotional videos for social networks.</p>
          </div>

          <div>
            <div className='flex flex-col md:flex-row md:gap-4 mb-2'>
              <span className='text-black font-medium min-w-[140px]'>Nov 2011 - May 2012</span>
              <div>
                <p className='text-black font-medium'>Videographer & Production</p>
                <p className='text-my-gray'>MediaUni Web - UV // Spain</p>
              </div>
            </div>
            <p className='text-my-gray md:ml-[156px]'>Cameraman, video editor, developer and creator of a Sport program for the university.</p>
          </div>

          <div>
            <div className='flex flex-col md:flex-row md:gap-4 mb-2'>
              <span className='text-black font-medium min-w-[140px]'>Jul 2011 - Sep 2011</span>
              <div>
                <p className='text-black font-medium'>Camera Assistant</p>
                <p className='text-my-gray'>VAV Productions // Spain</p>
              </div>
            </div>
            <p className='text-my-gray md:ml-[156px]'>Camera assistant in a live program of Canal Extremadura TV.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className='mb-12'>
        <h3 className='text-xl font-bold mb-6 uppercase'>Education</h3>
        <div className='space-y-4'>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <span className='text-black font-medium min-w-[140px]'>Nov 2011 - May 2012</span>
            <div>
              <p className='text-black font-medium'>Master's Degree in Audiovisuals Contents and Formats</p>
              <p className='text-my-gray'>University of Valencia</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <span className='text-black font-medium min-w-[140px]'>Sep 2007 - Sep 2011</span>
            <div>
              <p className='text-black font-medium'>Bachelor of Audiovisual Communication</p>
              <p className='text-my-gray'>University of Extremadura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voluntary Works Section */}
      <section className='mb-12'>
        <h3 className='text-xl font-bold mb-6 uppercase'>Voluntary Works</h3>
        <div className='space-y-4'>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <span className='text-black font-medium min-w-[140px]'>2016</span>
            <span className='text-my-gray'>Czech Republic // Training Course Video Editing</span>
          </div>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <span className='text-black font-medium min-w-[140px]'>2015</span>
            <span className='text-my-gray'>Macedonia // Euro Handball Women Sub-17 as a cameraman and video editor</span>
          </div>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <span className='text-black font-medium min-w-[140px]'>2014</span>
            <span className='text-my-gray'>Bulgaria // International Short Films Festival as a film assistant</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='mb-12'>
        <h3 className='text-xl font-bold mb-6 uppercase'>Professional Skills</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h4 className='text-black font-medium mb-3'>Software</h4>
            <ul className='text-my-gray space-y-1'>
              <li>• Adobe Photoshop</li>
              <li>• Adobe Illustrator</li>
              <li>• Adobe Premiere Pro</li>
              <li>• Adobe After Effects</li>
              <li>• Adobe InDesign</li>
              <li>• Adobe Animate</li>
              <li>• Final Cut Pro</li>
            </ul>
          </div>
          <div>
            <h4 className='text-black font-medium mb-3'>Expertise</h4>
            <ul className='text-my-gray space-y-1'>
              <li>• Recording</li>
              <li>• Video Editing</li>
              <li>• Photography</li>
              <li>• Graphic Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className='mb-12'>
        <h3 className='text-xl font-bold mb-6 uppercase'>Languages</h3>
        <div className='text-my-gray space-y-1'>
          <p>• Spanish (Native)</p>
          <p>• English</p>
          <p>• German</p>
        </div>
      </section>
    </div>
  );
};
