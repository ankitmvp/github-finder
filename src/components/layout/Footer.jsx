import { FaGithub } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <FaGithub size="50" />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
