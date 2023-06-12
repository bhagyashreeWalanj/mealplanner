import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaLeaf } from "react-icons/fa";
import "../style/footer.scss";

const Footer = () => {
  return (
    <footer className="rounded-xl bg-gray-100 ">
      <div className="container m-auto space-y-8 px-6 py-16 text-gray-600 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
          <h3 className="footer__logo">
            <FaLeaf />
            Plan&Eat
          </h3>
          <div className="flex gap-6">
            <a
              href="www.facebook.com"
              target="blank"
              aria-label="facebook"
              className="hover:text-cyan-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="www.twitter.com"
              target="blank"
              aria-label="twitter"
              className="hover:text-cyan-600"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/bhagyashreewalanj6490"
              target="blank"
              aria-label="linkedin"
              className="hover:text-cyan-600"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
