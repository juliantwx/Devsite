import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Stack, Divider } from "@mui/material";

function Footer() {
  // Create a list of contact information objects
  const contactLinks = [
    {
      url: "https://github.com/juliantwx",
      icon: <FaGithub />,
    },
    {
      url: "https://linkedin.com/in/juliantwx",
      icon: <FaLinkedin />,
    },
    {
      url: "tel:+61449583683",
      icon: <FaPhone />,
    },
    {
      url: "mailto:juliantwx.work@gmail.com",
      icon: <IoIosMail />,
    },
  ];

  return (
    <footer className="w-full bg-black text-cream px-5 py-10">
      <Stack
        flexDirection="row"
        gap={3}
        alignItems="center"
        justifyContent="center"
      >
        {/* Loop through all contacts and create a clickable image for each one */}
        {contactLinks.map((contact, index) => (
          <React.Fragment key={index}>
            {index !== 0 && (
              // Divider between each icon
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                color="#FFF"
                sx={{
                  height: "2rem",
                  borderColor: "#e7ded9",
                }}
              />
            )}
            {/* Clickable Contact Icon */}
            <a
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className="text-3xl"
            >
              {contact.icon}
            </a>
          </React.Fragment>
        ))}
      </Stack>
    </footer>
  );
}

export default Footer;
