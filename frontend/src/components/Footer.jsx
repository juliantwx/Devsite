import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { Stack, Divider, Tooltip } from "@mui/material";

function Footer() {
  // Create a list of contact information objects
  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/juliantwx",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/juliantwx",
      icon: <FaLinkedin />,
    },
    {
      name: "Phone",
      url: "tel:+61449583683",
      icon: <HiPhone />,
    },
    {
      name: "Email",
      url: "mailto:juliantwx.work@gmail.com",
      icon: <IoMdMail />,
    },
  ];

  return (
    <footer className="w-full bg-black text-cream px-5 py-10">
      <Stack alignItems="center" gap={2}>
        <p>You can reach me at</p>
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
                  sx={{
                    height: "1.5rem",
                    borderColor: "#e7ded9",
                  }}
                />
              )}
              {/* Clickable Contact Icon */}
              <Tooltip title={contact.name} placement="top" arrow>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-[32px] hover:text-amber transition-colors`}
                >
                  {contact.icon}
                </a>
              </Tooltip>
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </footer>
  );
}

export default Footer;
