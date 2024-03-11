import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-col-1">
                <div className="mt-5">
                    <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white">boulevard</span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3">
                    <div>
                        <Footer.Title title='about'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='/about' rel='noopener noreferrer'>
                                Boulevard Blog
                            </Footer.Link>
                            <Footer.Link href='/contact-me' rel='noopener noreferrer'>
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='follow me'/>
                        <Footer.LinkGroup col>
                           <Footer.Link href='https://github.com/arushi2207' target='_blank' rel='noopener noreferrer'>
                                Github
                            </Footer.Link>
                            <Footer.Link href='https://www.linkedin.com/in/arushi-srivastava-21171b270' target='_blank' rel='noopener noreferrer'>
                                LinkedIn
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Boulevard Blog" year={new Date().getFullYear()} />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='https://www.facebook.com/login/' icon={BsFacebook} />
                    <Footer.Icon href='https://www.instagram.com/accounts/login/?hl=en' icon={BsInstagram} />
                    <Footer.Icon href='https://twitter.com/i/flow/login' icon={BsTwitter} />
                    <Footer.Icon href='https://github.com/arushi2207' icon={BsGithub} />
                    <Footer.Icon href='https://www.linkedin.com/in/arushi-srivastava-21171b270' icon={BsLinkedin} />
                </div>
            </div>
        </div>
    </Footer>
  )
}