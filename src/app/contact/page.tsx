import React from "react";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAttachEmail, MdEmail } from "react-icons/md";
import Footer from "../../components/Footer";
import NavbarWhite from "../../components/NavbarWhite";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { Arizonia } from "next/font/google";
import CTA from "../../components/CTA";
import Head from "next/head";
const dancing = Arizonia({ subsets: ["latin"], weight: ["400"] });
import { Metadata } from "next";
import ContactClient from "../../components/ContactCient";

export const metadata: Metadata = {
  title: "Contact us - Diamol",
  description:
    "Contact Diamol, the trusted event management company in Andhra pradesh discuss your event requirements.",
};

export default function Contact() {
  return (
    <>
      <NavbarWhite />
      <div className="text pt-36 mb-12 py-10 text-center flex-col flex space-y-3">
        <div
          className={`" ${dancing.className} text-6xl tracking-wide font-bold"`}
        >
          Contact Us
        </div>
        <div className="text-2xl font-light">And get your free quote now!</div>
      </div>

      {/* Contact Section */}
      <ContactClient />

      <CTA />
    </>
  );
}
