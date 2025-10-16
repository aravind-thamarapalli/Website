import React from "react";
import styled from "styled-components";
import { Instagram, Github, Linkedin, Star } from "lucide-react";
import { SiLinktree } from "react-icons/si";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// ====== Styled Components ======
const ContactWrapper = styled.div`
  font-family: "Outfit", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: auto;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90vw;
    padding: 1rem;
    text-align: center;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 3px solid white;
  background: rgba(0, 0, 0, 0.9);
  font-size: 1rem;

  &:focus {
    outline: 3px solid #22668a;
  }
`;

const NoroundInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 3px solid white;
  background: rgba(0, 0, 0, 0.9);
  font-size: 1rem;

  &:focus {
    outline: 3px solid #22668a;
  }
`;

const EmptyInput = styled.input`
  padding: 0.25rem;
  width: 75px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 3px solid white;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background: rgba(0, 0, 0, 0.9);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: 3px solid #22668a;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  width: 100%;
  max-width: 300px;
  border-radius: 25px;
  border: 5px solid white;
  background: transparent;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.div`
  color: white;
  font-size: 1.2rem;
  margin: 2rem 0;
  letter-spacing: 0.5em;
  border-bottom: 2px solid white;

  span {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    color: white;
    border: 1px solid white;
    border-radius: 50%;
    padding: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

// ====== Component ======
export default function Contact() {
  return (
    <ContactWrapper>
      {/* Form Section */}
      <FormSection>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target[0].value;
            const email = e.target[1].value;
            const message = e.target[2].value;

            // Construct Gmail compose link
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=asci_hub@gvpce.ac.in&su=${encodeURIComponent(
              `Message from ${name}`
            )}&body=${encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

            // Open Gmail in new tab
            window.open(gmailLink, "_blank");
          }}
        >
          <Input type="text" placeholder="Your Name" required />
          <NoroundInput type="email" placeholder="Email" required />
          <TextArea placeholder="Message" required />
          <EmptyInput disabled />
          <Button type="submit">Mail Us</Button>
        </Form>
      </FormSection>

      {/* Content Section */}
      <ContentSection>
        <Title>
          CONTACT
          <br />
          AsCI
        </Title>
        <Subtitle>
          <span>W</span>
          <span>E</span>
          <span>R</span>
          <span>E</span>
          <span>O</span>
          <span>N</span>
        </Subtitle>

        <SocialIcons>
          <a href="https://www.instagram.com/asci_gvpcoe/#" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://github.com/AsCI-Association-of-Computer-Intellects" aria-label="Github">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/company/asci-association-of-computer-intellects/" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://www.whatsapp.com/channel/0029VayiNtSCcW4l69MzUC1P" aria-label="WhatsApp">
            <WhatsAppIcon fontSize="large" />
          </a>
          <a href="https://linktr.ee/Asci_gvpce" aria-label="Linktree">
            <SiLinktree size={24} />
          </a>
        </SocialIcons>
      </ContentSection>
    </ContactWrapper>
  );
}
