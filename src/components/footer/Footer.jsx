import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    links: "/#",
  },

  {
    title: "About",
    links: "/#about",
  },

  {
    title: "Contact",
    links: "/#contact",
  },

  {
    title: "Blog",
    links: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className=" dark:bg-gary-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              MekShop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              temporibus.
            </p>
            <p className="text-gray-500 mt-4">
              This is MekShop, a Subsidairy of Mek Company
            </p>
            <a
              href="#"
              target="_blank"
              className="inline-block bg-primary/90 text-white px-20 py-4 mt-4 text-sm rounded-full"
            >
              Portfolio
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.links}
                      className="text-gray-600 hover:text-black duration-300 dark:text-gray-400 dark:hover:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.links}
                      className="text-gray-600 hover:text-black duration-300 dark:text-gray-400 dark:hover:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>R. Rainha Dona Leonor 229, Lisbon</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+351 920 267 645</p>
                </div>
                <div>
                  <a
                    className="flex items-center gap-3 mt-3 text-3 hover:text-primary duration-300"
                    href="https://x.com/ChiekeMac1085?t=D7QGIXcCFedxCXZ7T2HsRg&s=09"
                    target="_blank"
                  >
                    <FaTwitter className="text-3 hover:text-primary duration-300" />
                    Twitter
                  </a>
                  <a
                    className="flex items-center gap-3 mt-3 text-3 hover:text-primary duration-300"
                    href="https://www.linkedin.com/in/chieke-chukwuemeka-b38324231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_lank"
                  >
                    <FaLinkedin className="text-3 hover:text-primary duration-300" />
                    LinkedIn
                  </a>
                  <a
                    className="flex items-center gap-3 mt-3 text-3 hover:text-primary duration-300"
                    href="https://github.com/chiemek"
                    target="_blank"
                  >
                    <FaGithub className="text-3 hover:text-primary duration-300" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
