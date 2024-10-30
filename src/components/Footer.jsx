import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://web.facebook.com/dkeles.dkeles1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/oladele_olabiyi?igsh=MWltd3Q0cnp0c21odg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.x.com/OladeleOlabiyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/oladele-olabiyi-7a7968288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500">©2024 All rights reserved</p>
      </div>
    </footer>
  );
}
