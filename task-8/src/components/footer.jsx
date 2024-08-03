import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";

function Footer() {
  return (
    <footer className="footer bg-base-100 text-base-content pt-10 px-4 md:px-20 pb-10 mt-10 shadow-inner shadow-emerald-900">
      <nav className="mb-6 md:mb-0">
        <h3 className="footer-title text-xl">OUR STORY</h3>
        <a className="link link-hover text-lg">OUR HISTORY</a>
        <a className="link link-hover text-lg">OUR MISSION</a>
        <a className="link link-hover text-lg">FAQ</a>
        <a className="link link-hover text-lg">FINANCIALs</a>
        <a className="link link-hover text-lg">PRESS AND MEDIA</a>
        <a className="link link-hover text-lg">CONTACT US</a>
      </nav>
      <nav className="mb-6 md:mb-0">
        <h3 className="footer-title text-xl">GET INVOLVED</h3>
        <a className="link link-hover text-lg">DONATE NOW</a>
        <a className="link link-hover text-lg">START A FUNDRAISER</a>
        <a className="link link-hover text-lg">SHOP</a>
        <a className="link link-hover text-lg">OUR WISH LIST</a>
        <a className="link link-hover text-lg">VOLUNTEER</a>
        <a className="link link-hover text-lg">MORE WAYS TO GIVE</a>
      </nav>
      <nav className="flex flex-col h-64 border-l-2 border-black pl-9">
        <h3 className="footer-title text-xl">Social</h3>
        <div className="grid grid-flow-col gap-5">
          <a>
            <FaFacebookF size={24} />
          </a>
          <a>
            <RiTwitterXLine size={24} />
          </a>
          <a>
            <TiSocialInstagram size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
