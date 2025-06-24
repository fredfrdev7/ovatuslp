import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Logocanvas from "../../public/Logocanvas";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrBeacon, GrGroup, GrDocumentTime, GrCertificate, GrPhone, GrMailOption, GrDirections } from "react-icons/gr";
import corporate from "../assets/corporate.mp4"
import logofull from "../assets/logofull.svg"
import logobackground from "../assets/logobackground.svg"
import brazilmap from "../assets/brazilmap.svg"
// import logonav from '../assets/logonav.svg'
// import ceo from '../assets/ceo.jpg'
import fractionalloads from '../assets/fractionalloads.jpg'
import storage from '../assets/storage.jpg'
import operationsdedicated from '../assets/operationsdedicated.jpg'
import realtimegps from '../assets/realtimegps.jpg'
import logocontact from '../assets/logocontact.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { HomeContainer, Headline, CanvasHeadline, HeadlineCanvasTitle, LineSection, HeadlineCanvasSubTitle, CtaContent, AboutSection, AboutUs, Services, ClientsCases, Footer, Icons, CarouselContainer, Slider, ItemCarousel } from "../styles/Home.style";

function Home() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <>

            <HomeContainer>
                <Headline id="home">
                    <video src={corporate} autoPlay loop muted playsInline></video>
                    <CanvasHeadline>
                        <HeadlineCanvasTitle>
                            <h1 data-aos="fade-down" data-aos-duration="1000">Ovatus Transportes</h1>
                            <h2 data-aos="fade-right" data-aos-duration="1300">Excelência e confiança em cada quilômetro!</h2>
                        </HeadlineCanvasTitle>
                        <Canvas camera={{ position: [400, 0, 0], fov: 1 }} style={{ pointerEvents: 'none' }}>
                            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true} autoRotateSpeed={6} />
                            <Suspense fallback={null}>
                                <Logocanvas />
                            </Suspense>
                            <ambientLight intensity={-0.2} />
                            <Environment preset="city" />
                        </Canvas>
                        <HeadlineCanvasSubTitle>
                            <p>Uma transportadora com a força de um grupo reconhecido pela seriedade, pontualidade e inovação logística.</p>
                        </HeadlineCanvasSubTitle>
                    </CanvasHeadline>
                </Headline>
                <CtaContent>
                    <div className="box">
                        <div className="borderLine"></div>
                        <a href="https://wa.me/5516992228343?text=Ol%C3%A1%20Rafael%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20dos%20servi%C3%A7os." target="_blank">
                            <div className="childBox">SAIBA MAIS</div>
                        </a>
                    </div>
                </CtaContent>
                <AboutSection id="aboutus">
                    <AboutUs>
                        <div className="aboutcontent">
                            <div className="aboutinfo">
                                <h1>Quem Somos</h1>
                                <img src={logofull} alt="logofull" />
                                <h2>Estrutura Forte!<br /> Compromisso Sério.</h2>
                                <p>A Ovatus nasceu da união entre a tradição empresarial e a visão de futuro. Com uma base sólida em engenharia e gestão, somos mais que uma transportadora: somos um parceiro estratégico para o crescimento dos nossos clientes.</p>
                                <h3>Diferenciais</h3>
                                <ul>
                                    <i><GrBeacon /></i>
                                    <li data-aos="fade-right" data-aos-duration="1300">Frota moderna e monitorada</li>
                                    <i><GrGroup /></i>
                                    <li data-aos="fade-right" data-aos-duration="1300">Equipe treinada e comprometida</li>
                                    <i><GrDocumentTime /></i>
                                    <li data-aos="fade-right" data-aos-duration="1300">Cumprimento rigoroso de prazos</li>
                                    <i><GrCertificate /></i>
                                    <li data-aos="fade-right" data-aos-duration="1300">Solidez financeira e corporativa</li>
                                </ul>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1000" className="logobackground">
                                <img src={logobackground} alt="logobackground" />
                            </div>
                        </div>
                    </AboutUs>
                </AboutSection>
                <Services id="services">
                    <h1>Serviços</h1>
                    <h2>Logística inteligente, segura e sob medida</h2>
                    <h3>Categorias possíveis:</h3>
                    <div className="card">
                        <div className="cardtitle">
                            <h3>Transporte rodoviário de cargas fracionadas e fechadas</h3>
                        </div>
                        <img src={fractionalloads} alt="" />
                    </div>
                    <p>Soluções ágeis, seguras e personalizadas para o transporte de cargas em todo o território nacional. Atendemos demandas pontuais e recorrentes, com compromisso com prazos e integridade da sua mercadoria.</p>
                    <div className="card">
                        <div className="cardtitle">
                            <h3>Operações dedicadas e contratos logísticos</h3>
                        </div>
                        <img src={operationsdedicated} alt="" />
                    </div>
                    <p>Gestão completa e personalizada da sua cadeia logística. Atuamos com equipes exclusivas, estrutura sob medida e foco em eficiência, reduzindo custos e aumentando a produtividade do seu negócio.</p>
                    <div className="card">
                        <div className="cardtitle">
                            <h3>Rastreamento em tempo real</h3>
                        </div>
                        <img src={realtimegps} alt="" />
                    </div>
                    <p>Acompanhe sua carga do início ao fim com total transparência. Nossa tecnologia oferece visibilidade completa em tempo real, garantindo mais segurança, controle e tranquilidade para o seu negócio.</p>
                    <div className="card">
                        <div className="cardtitle">
                            <h3>Armazenamento e distribuição(caso aplicável)</h3>
                        </div>
                        <img src={storage} alt="" />
                    </div>
                    <p>Infraestrutura segura e estratégica para armazenagem e distribuição eficiente de mercadorias. Integramos estoques com a malha de transporte para otimizar prazos, reduzir custos e garantir agilidade nas entregas.</p>
                </Services>
                <ClientsCases id="contactus">
                    <h1>Confiança que se transporta</h1>
                    <img src={logocontact} alt="" />
                    <h2>Atendemos em todo território nacional.</h2>
                    <img src={brazilmap} alt="" />
                    <h3>Fale conosco</h3>
                    <div className="contacts">
                        <div className="itemcontacts">
                            <i><GrPhone /></i>
                            <p>(16) 3004-2906</p>
                        </div>
                        <div className="itemcontacts">
                            <i><GrMailOption /></i>
                            <p>contato@ovatus.com.br</p>
                        </div>
                         <div className="itemcontacts">
                            <i><GrMailOption /></i>
                            <p>comercial@ovatus.com.br</p>
                        </div>
                    </div>
                    <i><GrDirections /></i>
                    <p>Estamos localizados na melhor região de acesso.</p>
                    {/* (Aqui você pode colocar logos de empresas atendidas, ou depoimentos — mesmo que curtos e com permissão dos clientes.) */}
                    {/* <CarouselContainer>
                        <Slider>
                            <ItemCarousel src={logofull}></ItemCarousel>
                            <ItemCarousel src={logobackground}></ItemCarousel>
                            <ItemCarousel src={logonav}></ItemCarousel>
                            <ItemCarousel src={logofull}></ItemCarousel>
                            <ItemCarousel src={logobackground}></ItemCarousel>
                            <ItemCarousel src={logonav}></ItemCarousel>
                            <ItemCarousel src={logofull}></ItemCarousel>
                            <ItemCarousel src={logobackground}></ItemCarousel>
                        </Slider>
                        <Slider>
                            <ItemCarousel src={logofull}></ItemCarousel>
                            <ItemCarousel src={logobackground}></ItemCarousel>
                            <ItemCarousel src={logonav}></ItemCarousel>
                            <ItemCarousel src={logofull}></ItemCarousel>
                            <ItemCarousel src={logobackground}></ItemCarousel>
                            <ItemCarousel src={logonav}></ItemCarousel>
                            <ItemCarousel src={logofull}></ItemCarousel>
                            <ItemCarousel src={logobackground}></ItemCarousel>
                        </Slider>
                    </CarouselContainer>
                    <h3>O que os clientes OVATUS falam:</h3>
                    <div className="clients">
                        <img src={ceo} alt="" />
                        <p>João</p>
                        <p>CEO JM Industrial S/A</p>
                        <p>"Segurança e confiança além da entrega"</p>
                    </div> */}
                </ClientsCases>
                <Footer>
                    <p>Rodapé (footer) Políticas (Privacidade, Cookies se necessário)</p>
                    <h3>Siga nossas redes sociais</h3>
                    <Icons>
                        <a href="https://wa.me/5516992228343?text=Ol%C3%A1%20Rafael%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20dos%20servi%C3%A7os." target="_blank"><FaInstagram /></a><a href="https://wa.me/5516992228343?text=Ol%C3%A1%20Rafael%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20dos%20servi%C3%A7os." target="_blank"><FaLinkedin /></a>
                    </Icons>
                    <p>“© Ovatus Transportes – Todos os direitos reservados”</p>

                </Footer>
            </HomeContainer>
        </>
    )
}

export default Home