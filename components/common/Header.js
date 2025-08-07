import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import ConsultationSurvey from "./ConsultationSurvey";

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)
  const [showSurvey, setShowSurvey] = useState(false);

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

  const handleOpenSurvey = () => {
    setShowSurvey(true);
  };

  const handleCloseSurvey = () => {
    setShowSurvey(false);
  };

  const handleSubmitSurvey = (formData) => {
    // For now, simulate sending data by logging and closing modal
    console.log("Consultation form submitted:", formData);
    alert("Thank you for booking a consultation. We will contact you soon.");
    setShowSurvey(false);
    // Optionally, redirect to contact page or send data to API here
  };

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo title='' caption='' className='logomin' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              Agency
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Team
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link>
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button className='button-primary' onClick={handleOpenSurvey}>book a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
      <ConsultationSurvey
        isOpen={showSurvey}
        onClose={handleCloseSurvey}
        onSubmit={handleSubmitSurvey}
      />
    </>
  )
}

export default Header
