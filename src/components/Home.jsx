import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Logocanvas from "../../public/Logocanvas";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import corporate from "../assets/corporate.mp4"
import logofull from "../assets/logofull.svg"
import logobackground from "../assets/logobackground.svg"
import logonav from '../assets/logonav.svg'
import ceo from '../assets/ceo.jpg'


import { HomeContainer, Headline, CanvasHeadline, HeadlineCanvasTitle, HeadlineCanvasSubTitle, CtaContent, AboutSection, AboutUs, Services, ClientsCases, Footer, Icons,CarouselContainer, Slider,ItemCarousel } from "../styles/Home.style";

function Home() {
    return (
        <>

            <HomeContainer>
                <Headline>
                    <video src={corporate} autoPlay loop muted playsInline></video>
                    <CanvasHeadline>
                        <HeadlineCanvasTitle>
                            <h1>Ovatus Transportes</h1>
                            <h2>Excelência e confiança em cada quilômetro!</h2>
                        </HeadlineCanvasTitle>
                        <Canvas camera={{ position: [400, 0, 0], fov: 1 }}>
                           
                            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true} autoRotateSpeed={6}  />
                            <Suspense fallback={null}>
                                <Logocanvas />
                            </Suspense>
                            <ambientLight intensity={-0.2} />
                            <Environment preset="forest" />
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
                {/* <LineSection></LineSection> */}
                <AboutSection>
                    <AboutUs>
                        <div className="aboutcontent">
                            <div className="aboutinfo">
                                <h1>Quem Somos</h1>
                                <img src={logofull} alt="logofull" />
                                <h2>Estrutura Forte. Compromisso Sério</h2>
                                <p>A Ovatus nasceu da união entre a tradição empresarial e a visão de futuro. Com uma base sólida em engenharia e gestão, somos mais que uma transportadora: somos um parceiro estratégico para o crescimento dos nossos clientes.</p>
                                <h3>Diferencias</h3>
                                <ul>
                                    <li>- Frota moderna e monitorada</li>
                                    <li>- Equipe treinada e comprometida</li>
                                    <li>- Cumprimento rigoroso de prazos</li>
                                    <li>- Solidez financeira e reputação corporativa</li>
                                </ul>
                            </div>
                            <div className="logobackground">
                                <img src={logobackground} alt="logobackground" />
                            </div>
                        </div>
                    </AboutUs>
                </AboutSection>
                <Services>
                    <h1>Serviços</h1>
                    <h2>Logística inteligente, segura e sob medida</h2>
                    <p>Categorias possíveis:</p>
                    <ul>
                        <li>Transporte rodoviário de cargas fracionadas e fechadas</li>
                        <li>Operações dedicadas e contratos logísticos</li>
                        <li>Rastreamento em tempo real</li>
                        <li>Armazenagem e distribuição (caso aplicável)</li>
                    </ul>
                </Services>
                <ClientsCases>
                    <h1>Clientes e Cases</h1>
                    <h2>Confiança que se transporta</h2>
                    <p>Temos orgulho de atender empresas que exigem o mais alto padrão de entrega.</p>
                    {/* (Aqui você pode colocar logos de empresas atendidas, ou depoimentos — mesmo que curtos e com permissão dos clientes.) */}
                    <CarouselContainer>
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
                    </div>
                </ClientsCases>
                <Footer>
                    <p>Rodapé (footer) Políticas (Privacidade, Cookies se necessário)</p>

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