export default function ContactMe() {
    return (
        <div className='min-h-screen flex pt-12 justify-center'>
            <div className='max-w-2xl mx-auto p-5 text-center'>
                <div>
                    <h1 className='text-3xl font font-semibold text-center my-7'>
                        Contact Me
                    </h1>
                    <div className='text-md text-gray-500 flex flex-col gap-6'>
                        <p>
                            Thank you for visiting my personal blog! Your feedback, questions, and suggestions are valuable to me, and I would love to hear from you. Whether you want to share your thoughts on a post, inquire about collaboration opportunities, or simply say hello, feel free to mail me at <a className="text-blue-500 underline hover:text-blue-300" href="mailto:arushi22.chd@gmail.com"> arushi22.chd@gmail.com</a>.
                        </p>
                        <p>
                            I strive to respond to all messages in a timely manner, so please be patient if you don't receive an immediate reply. Your messages are important to me, and I look forward to connecting with you and building a meaningful dialogue. Thank you for being a part of my journey, and I can't wait to hear from you!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}