import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { LightBulbIcon, ChatBubbleLeftRightIcon, UserGroupIcon, LanguageIcon, RocketLaunchIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { FaLinkedin } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [])
  return (
    <div style={{ backgroundColor: 'var(--bs-dark)' }}>
      {/* Navigation Menu */}      <nav className="position-fixed w-100" style={{ 
        backgroundColor: 'rgba(26, 26, 26, 0.9)',
        backdropFilter: 'blur(5px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000
      }}>
        <div className="container">          <div className="d-flex justify-content-between align-items-center py-2">            <div className="text-white fs-4" style={{ 
              fontFamily: "'Lato', sans-serif",
              letterSpacing: '0.2em',
              fontWeight: 300
            }}>Portfólio</div>
            <div className="d-flex"><a href="#qualities" className="text-decoration-none mx-3 text-white-50 hover-bright">Qualidades</a>
            <a href="#about" className="text-decoration-none mx-3 text-white-50 hover-bright">Sobre</a>            <a href="#experience" className="text-decoration-none mx-3 text-white-50 hover-bright">Experiência</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start order-2 order-md-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}              >                <h1 className="display-4 fw-bold mb-3 text-white">Ana Emilly Marques</h1>
                <p className="fs-5 text-light fst-italic">"O futuro pertence àqueles que acreditam<br />na beleza de seus sonhos." - Eleanor Roosevelt</p>
              </motion.div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="d-flex flex-column align-items-center">                  <img
                    src={`${import.meta.env.BASE_URL}foto-portifolio02.jpg`}
                    alt="Ana Emilly Marques"
                    className="img-fluid shadow"
                  style={{ 
                    maxHeight: '70vh', 
                    objectFit: 'cover',
                    objectPosition: 'center 10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '100%'                  }}
                  />
                  <div className="mt-4 ms-4">                    <a
                      href="https://www.linkedin.com/in/ana-emilly-m-6a7304348/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary d-inline-flex align-items-center px-4 py-2"
                  >                      <FaLinkedin className="fs-4 me-2" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>      {/* Main Qualities Section */}
      <section id="qualities" className="py-5">
        <div className="container">          <h2 className="display-5 fw-bold text-center mb-5 text-white">Principais Qualidades</h2>          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">              <div className="animate-on-scroll quality-sphere">
                <UserGroupIcon className="quality-icon" />
                <h3 className="fs-4 fw-semibold text-white">Espírito de Liderança</h3>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="animate-on-scroll quality-sphere">
                <ChatBubbleLeftRightIcon className="quality-icon" />
                <h3 className="fs-4 fw-semibold text-white">Ótima Comunicação</h3>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="animate-on-scroll quality-sphere">
                <LightBulbIcon className="quality-icon" />
                <h3 className="fs-4 fw-semibold text-white">Criatividade</h3>              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="animate-on-scroll quality-sphere">
                <LanguageIcon className="quality-icon" />
                <h3 className="fs-4 fw-semibold text-white">Inglês B2</h3>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="animate-on-scroll quality-sphere">
                <RocketLaunchIcon className="quality-icon" />
                <h3 className="fs-4 fw-semibold text-white">Proatividade</h3>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="animate-on-scroll quality-sphere">
                <HandRaisedIcon className="quality-icon" />
                <h3 className="fs-4 fw-semibold text-white">Colaboração</h3>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* About Section */}
      <section id="about" className="py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">              <h2 className="display-5 fw-bold mb-4 text-white">Sobre Ana Emilly</h2>
              <div className="mb-5">
                <p className="fs-6 animate-on-scroll text-light fst-italic mb-4 text-primary">
                  "Quem não é visto, não é lembrado."
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <p className="fs-7 animate-on-scroll text-light mb-4 lh-lg">
                    Sou uma jovem de 17 anos que desde os 7 segue à risca essa frase. Nunca houve um momento em que tenham precisado de um voluntário e eu não tenha sido a primeira a levantar a mão. Sabendo de tudo, ou não.
                  </p>
                  <p className="fs-7 animate-on-scroll text-light mb-4 lh-lg">
                    Sou apaixonada por comunicação e tudo o que engloba expressar melhor minhas ideias e opiniões. Estando muito familiar com posições de liderança, uso da minha facilidade em comunicar necessidades para ajudar aqueles que não podem defender os próprios ideais.
                  </p>
                  <p className="fs-7 animate-on-scroll text-light mb-4 lh-lg">
                    Além da escrita, leitura e outros hobbies, meus estudos focam em programação, estudo de línguas estrangeiras e também na área de técnico em telecomunicações.
                  </p>
                  <p className="fs-7 animate-on-scroll text-light mb-4 lh-lg">
                    Meu maior objetivo de vida é avançar para além do que penso ser bom e chegar em um nível de vida acima das expectativas, algo que irei conquistar através dos estudos e foco em construir um futuro ideal para mim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Experience Section */}
      <section id="experience" className="py-5">
        <div className="container">          <h2 className="display-5 fw-bold text-center mb-5 text-white">Experiência</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 mb-4">
              <div className="experience-card animate-on-scroll">
                <div className="text-center">
                  <h3 className="fs-4 fw-semibold mb-3 text-white">Experiência 1</h3>
                  <p className="text-light mb-0">Descrição</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="experience-card animate-on-scroll">
                <div className="text-center">                  <h3 className="fs-4 fw-semibold mb-3 text-white">Experiência 2</h3>
                  <p className="text-light mb-0">Descrição</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="experience-card animate-on-scroll">
                <div className="text-center">
                  <h3 className="fs-4 fw-semibold mb-3 text-white">Experiência 3</h3>
                  <p className="text-light mb-0">Descrição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
