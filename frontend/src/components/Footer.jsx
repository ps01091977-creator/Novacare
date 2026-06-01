import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-teal-50/50 pt-10 px-6 md:px-20 border-t border-teal-100 rounded-t-3xl mt-24">
      <div className="grid md:grid-cols-[3fr_1fr_1fr] gap-12 mb-10 text-sm items-start">
        {/* Left Section */}
        <div className="flex items-start gap-4">
  <img className="w-28 mt-1" src={assets.logo} alt="Novacare Logo" />
  <p className="text-gray-600 leading-6 md:max-w-[75%]">
    <strong>Novacare – Effortless Healthcare Scheduling

</strong> <br />Patients can instantly book appointments with trusted doctors—from routine check-ups to specialist care—in just a few clicks. Our smart reminders keep appointments on track, while real-time updates ensure seamless coordination. Designed for modern healthcare, we save time for both patients and providers.
  </p>
</div>


        {/* Middle Section */}
        <div>
          <p className="text-lg font-semibold mb-4">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="hover:text-primary hover:translate-x-1 transition-all cursor-pointer">Home</li>
            <li className="hover:text-primary hover:translate-x-1 transition-all cursor-pointer">About Us</li>
            <li className="hover:text-primary hover:translate-x-1 transition-all cursor-pointer">Contact Us</li>
            <li className="hover:text-primary hover:translate-x-1 transition-all cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg font-semibold mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="hover:text-primary transition-colors cursor-pointer">+91-90000-90000</li>
            <li className="hover:text-primary transition-colors cursor-pointer">customersupport@Novacare.in</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <hr className="border-gray-300" />
      <p className="py-4 text-sm text-center text-gray-600">
        © 2025 Novacare.in — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
