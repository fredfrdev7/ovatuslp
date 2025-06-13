import styled, { keyframes } from "styled-components";

export const CtaAlert = keyframes`

from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`

export const HomeContainer = styled.div`
    background: linear-gradient(90deg, #1a1a1a 35%, #1a1a1a 86.61%);
    font-weight: 400;
    text-align: center;
    color: #f9f9f9;

    p {
       
        font-weight: 400;
    }
`

export const Headline = styled.div`
    width: 100%;
    height: 100vh;
    position:relative;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const CanvasHeadline = styled.div`
    position: absolute;
    width:100%;
    height:100vh;
    top: 0;
    display:flex;
    flex-direction:column;
    z-index: 6;
    margin-bottom: 0rem;
    background: linear-gradient(180deg, #1a1a1a 20%, rgba(255, 255, 255, 0) 56.61%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    canvas { 
        height:100vh !important;
    }

    
     
`

export const HeadlineCanvasTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    h2 {
        font-weight: 400;
        font-size: 1.3rem;
    }
`

export const HeadlineCanvasSubTitle = styled.div`
    background: linear-gradient(360deg, #1a1a1a 70%, rgba(255, 255, 255, 0) 96.61%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 0rem 2rem;
    font-size: 1.2rem;

    p {
        margin-top:1rem;
    }

`

export const CtaContent = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    min-height: 20vh;
    background: #1a1a1a;


   .box {
    width: 180px;
    height: 50px;
    background-color: #3d3d3d;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    
   }

   .box::after, .box::before {
    --angle: 0deg;
    content: '';
    position: absolute;
    top: 30%;
    left: 50%;
    translate: -50% -50%;
    width: 200px;
    height: 200px;
    background: conic-gradient(from 0deg, transparent 70%, #92c03e);
    animation: ${CtaAlert} 1.5s linear infinite ;
    z-index: 1;

}

.childBox {
    position: absolute;
    inset: 2px;
    border: double 1px transparent;
    background-image: linear-gradient(-188deg, #1a1a1a 50%, #3d3d3d), linear-gradient(-198deg , #3d3d3d, #1a1a1a 70%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: #fff;
    border-radius: 1rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
    
`

export const LineSection = styled.div`
    border-bottom: 1px solid;
    border-image: linear-gradient(to left, #1a1a1a , #92c03e , #1a1a1a ) 1;
	border-left: 0;
	border-right: 0;
	border-top: 0;
`

export const AboutSection = styled.div`
    display: flex;
    overflow: hidden;
`

export const AboutUs = styled.div`
    background: linear-gradient(180deg, #1a1a1a 35%, #3d3d3d 86.61%);
    color: #fff;
    overflow: hidden;
    position: relative;
    z-index: 1;

   .aboutcontent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align:center;
    z-index: 2;
    overflow: hidden;
    
   }

   .aboutinfo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding:2rem;
    z-index: 2;
   }

    .logobackground {
        position: absolute;
        align-self: center;
        overflow: hidden;
        width: 550px;
        z-index: 1;
        object-position: cover; 
    }

    .aboutinfo img{
        max-width: 280px;
    }
    
    ul {
        z-index: 3;
    }
    

    li {
        margin-bottom: 1rem;
        border-radius:0.5rem;
        list-style: none;
        align-items: left;
        background: linear-gradient(270deg, #1a1a1a 70%, rgba(255, 255, 255, 0) 96.61%);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: 0.5rem;
        
    }

`


export const Services = styled.div`
    display:flex;
    gap: 1rem;
    flex-direction: column;
    background: linear-gradient(180deg, #3d3d3d 5%, #3b6e3d 16.61%);
    color: #fff;
    text-align: center;
    padding: 4rem 2rem 2rem 2rem;

    li {
        
        border-radius:1rem;
        list-style: none;
        align-items: left;
        background: linear-gradient(180deg, #3d3d3d 60%, rgba(255, 255, 255, 0) 72.61%);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: 0.6rem 1rem 2rem 1rem;
    }
`

export const ClientsCases = styled.div`
    display:flex;
    gap: 1rem;
    flex-direction: column;
    background-color: #1a1a1a;
    color: #fff;
    text-align: center;
    padding: 3rem 0rem 3rem 0rem;

    p{
        padding: 0 2rem;
    }

    .clients {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .clients img {
        max-width: 90px;
        border-radius:20rem;
    }
   
`

export const CarouselContainer = styled.div`
    overflow:hidden;
    position:relative;
    white-space:nowrap;
    /* border-bottom: 0.1px solid #6400e7;
    border-image: linear-gradient(to left, #000000 30%, #92c03e, #3b6e3d) 1;
    border-left: 0;
	border-right: 0;
	border-top: 0; */
`

export const Scroll = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
`

export const Slider = styled.div`
    display:inline-flex;
    animation: ${Scroll} 20s linear infinite;
    padding: 2rem 0rem 2rem 0rem; 
`

export const ItemCarousel = styled.img`
    width:5rem;
    margin: 0 2rem;     

`

export const Footer = styled.div`
    background-color: #3d3d3d;
    color: #fff;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 1rem;
`

export const Icons = styled.div`
    display:flex;
    position: relative;
    right:0.5rem;
    margin-top:1rem;
    font-size:2.7rem;

    & > a {
        color:#f9f9f9;
        opacity:0.7;
        margin-left:1rem;
    &:hover {
        opacity: 100%;
}
    }
`