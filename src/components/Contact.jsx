import styled from "styled-components"
import { Instagram, Github, Linkedin, Star } from "lucide-react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactWrapper = styled.div`
    font-family: "Outfit", serif;   
    display: flex;
    width: 1024px;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 8rem;
    gap: 2rem;
    @media (max-width: 768px) {
    font-family: "Outfit", serif;   
    flex-direction: column;
    gap: 2rem;
  }
`

const FormSection = styled.div`
  flex: 1;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 400px;
`

const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;

  &:focus{
    outline: 3px solid #22668A;
    
  }
`

const NoroundInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
      &:focus{
    outline: 3px solid #22668A;
    
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
    border: none;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    min-height: 120px;
    resize: vertical;
      &:focus{
    outline: 3px solid #22668A;
    
  }
`

const Button = styled.button`
  padding: 0.75rem;
  width: 300px;
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
`

const ContentSection = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin: 0;
  font-weight: bold;
`

const Subtitle = styled.div`
  color: white;
  font-size: 1.2rem;
  margin: 2rem 0;
  letter-spacing: 0.5em;
  border-bottom: 2px solid white;
  span {
    margin-right: 1rem;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    height: 25px;
    color: white;
    border: 1px solid white;
    border-radius: 100px;
    padding: 16px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`

export default function Contact() {
  return (
    <ContactWrapper>
      <FormSection>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input type="text" placeholder="Your Name" />
          <NoroundInput type="email" placeholder="Email" />
          <TextArea placeholder="Message" />
          <EmptyInput disabled/>
          <Button type="submit">Send Us</Button>
          
        </Form>
      </FormSection>

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
          <a href="#" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="Github">
            <Github size={24} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="#" aria-label="WhatsApp">
            <WhatsAppIcon height={24}/>
          </a>
          <a href="#" aria-label="Linkedtree">
            <Star size={24} />
          </a>
        </SocialIcons>
      </ContentSection>
    </ContactWrapper>
  )
}

