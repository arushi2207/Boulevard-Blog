export default function About() {
  return (
    <div className='min-h-screen flex pt-12 justify-center'>
      <div className='max-w-2xl mx-auto p-5 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Boulevard Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Boulevard Blog! Hi, My name is Arushi and this blog was created by me
              as a personal project to share my thoughts and ideas with the
              world. I am a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. I am always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              I encourage you to leave comments on my posts and engage with
              other readers. You can like other people's comments too. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}