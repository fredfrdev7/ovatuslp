import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Logocanvas from "../../public/Logocanvas";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrBeacon, GrGroup, GrDocumentTime, GrCertificate, GrPhone, GrMailOption, GrDirections } from "react-icons/gr";
import corporate from "../assets/corporate.mp4"
import logobackground from "../assets/logobackground.svg"
import brazilmap from "../assets/brazilmap.svg"
// import logonav from '../assets/logonav.svg'
// import ceo from '../assets/ceo.jpg'
import fractionalloads from '../assets/fractionalloads.jpg'
import operationsdedicated from '../assets/operationsdedicated.jpg'
import realtimegps from '../assets/realtimegps.jpg'
import logocontact from '../assets/logocontact.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { HomeContainer, Headline, CanvasHeadline, HeadlineCanvasTitle, LineSection, HeadlineCanvasSubTitle, HeadlineCanvasSubTitleResponsive, CtaContent, AboutSection, AboutUs, Services, ClientsCases, Footer, Icons, CarouselContainer, Slider, ItemCarousel } from "../styles/Home.style";

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
                            <h1 data-aos="fade-down" data-aos-duration="1000">Ovatus Soluções Logísticas</h1>
                            <h2 data-aos="fade-right" data-aos-duration="1300">Movidos pela inovação. Reconhecidos pela confiabilidade</h2>
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
                            <p>Estamos constantemente buscando melhorias para tornar o transporte mais ágil e seguro. Com nossa experiência, oferecemos um excelente serviço ao cliente desde o primeiro contato. Nossa eficiência, comprometimento e agilidade são nossos pontos fortes.</p>
                        </HeadlineCanvasSubTitle>
                    </CanvasHeadline>
                    <HeadlineCanvasSubTitleResponsive>
                         <p>Estamos constantemente buscando melhorias para tornar o transporte mais ágil e seguro. Com nossa experiência, oferecemos um excelente serviço ao cliente desde o primeiro contato. Nossa eficiência, comprometimento e agilidade são nossos pontos fortes.</p>
                    </HeadlineCanvasSubTitleResponsive>
                </Headline>
                <CtaContent>
                    <div className="box">
                        <div className="borderLine"></div>
                        <a href="https://wa.me/5516997857120?text=Ol%C3%A1%20Ovatus%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20dos%20servi%C3%A7os." target="_blank">
                            <div className="childBox">SAIBA MAIS</div>
                        </a>
                    </div>
                </CtaContent>
                <AboutSection id="aboutus">
                    <AboutUs>
                        <div className="aboutcontent">
                            <div className="aboutinfo">
                                <h1>Quem Somos</h1>
                                <h2>Estrutura Forte!<br /> Compromisso Sério.</h2>
                                <p>A Ovatus é uma empresa de soluções logísticas inteligentes, integrante de um grupo sólido e tecnologicamente avançado, com atuação nacional e internacional. Nascida da necessidade de atender projetos de alta complexidade técnica e logística, a Ovatus carrega em seu DNA a excelência operacional, a rastreabilidade e o compromisso com entregas estratégicas.</p>
                                <p>Mais do que transporte oferecemos, visão sistêmica , performance e confiança, conectando indústria, infraestrutura e inovação através de rotas seguras e eficientes.</p>
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
                    <h1>Transportes</h1>
                    <h2>Logística inteligente, segura e sob medida</h2>
                    <h3>Categorias possíveis:</h3>
                    <div className="card">
                        <div className="cardtitle">
                            <h3>Transporte de cargas exclusivas</h3>
                        </div>
                        <img src={fractionalloads} alt="" />
                        <p>Proporcionamos veículos dedicados exclusivamente ao transporte da sua mercadoria seja ela em carga completa ou fracionada, garantindo a segurança e integridade do seu produto durante todo o processo.</p>
                    </div>
                    <div className="card">
                        <div className="cardtitle">
                            <h3>Transporte de cargas fracionadas</h3>
                        </div>
                        <img src={operationsdedicated} alt="" />
                        <p>Aproveitamos de forma otimizada o espaço disponível em nossos veículos, complementando rotas destinadas e diluindo custos, porporcionando uma opção enconômica e confiável para o transporte de suas mercadorias.</p>
                    </div>
                    <div className="card">
                        <div className="cardtitle">
                            <h3>Transporte de cargas expressas</h3>
                        </div>
                        <img src={realtimegps} alt="" />
                        <p>Para empresas que necessitam de agilidade na entrega, oferecemos um serviço expresso totalmente personalizado, adaptado às suas necessidades específicas de urgência, tempo e prazo de entrega, cobrindo todo o território nacional de forma rápida e eficiente.</p>
                    </div>
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
                        <a href="https://www.instagram.com/ovatus.log/" target="_blank"><FaInstagram /></a><a href="https://wa.me/5516992228343?text=Ol%C3%A1%20Rafael%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20dos%20servi%C3%A7os." target="_blank"><FaLinkedin /></a>
                    </Icons>
                    <p>“© Ovatus Transportes – Todos os direitos reservados”</p>

                </Footer>
            </HomeContainer>
        </>
    )
}

export default Home