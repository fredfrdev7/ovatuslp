import styled, { keyframes } from "styled-components";

export const CtaAlert = keyframes`

from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`

export const Glitch = keyframes`
   
    50% { opacity: 0; }
   
`;

export const HomeContainer = styled.div`
    background: linear-gradient(90deg, #1a1a1a 35%, #1a1a1a 86.61%);
    text-align: center;
    color: #f9f9f9;
`

export const Headline = styled.div`
    width: 100%;
    height: 100vh;
    position:relative;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    
`

export const CanvasHeadline = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    z-index: 6;
    background: linear-gradient(360deg, #1a1a1a 20%, rgba(255, 255, 255, 0) 96.61%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    canvas { 
        height: 100vh !important;
    }  

`

export const HeadlineCanvasTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translate(0px, 20px);
    padding: 0 1rem;

    h1 {
        font-size: 2.3rem;
    }


    h2 {
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 2rem;
    }

    @media (max-width: 472px) and (min-width: 375px) {
        transform: translate(0px, 16px);
        
        h1 { 
            font-size: 2rem;
        }

        h2 {
        font-size: 1.2rem;
        
        }


    }


`

export const HeadlineCanvasSubTitle = styled.div`
    padding: 0 16rem;
    transform: translate(0px, -46px);

    p {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.6rem;
        
    }

    @media (max-width: 1280px) and (min-width: 1024px) {
        padding:0 12rem;
    }

    @media (max-width: 1023px) and (min-width: 884px) {
        padding: 0rem 8rem;
    }

    @media (max-width: 883px) and (min-width: 703px) {
        padding: 0rem 2rem; 
    }

    @media (max-width: 702px) and (min-width: 320px) {
         padding: 0rem 2rem; 
         transform: translate(0px, 0px);
    }

`

// export const HeadlineCanvasSubTitleResponsive = styled.div`
//     display: none;
//     position:relative;
//     z-index: 8;

//     p {
//         font-size: 1.2rem;
//         font-weight: 300;
//         line-height: 1.6rem;
        
//     }


//     @media (max-width: 702px) and (min-width: 546px) {
//         display: block;
//         padding: 0 3rem;
//         transform: translate(0px , -86px);
//     }

//     @media (max-width: 545px) and (min-width: 375px) {
//         display: block;
//         padding: 0 2rem;
//         transform: translate(0px , -26px);
//     }
// `

export const CtaContent = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
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
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: ${CtaAlert} 1.5s linear infinite ;
    z-index: 9;
    border-radius: 1rem;

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
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

@media (max-width: 704px) and (min-width: 320px) {
        margin-top: 2rem;
    }

    /* @media (max-width: 622px) and (min-width: 546px) {
        margin-top: 2rem;
    }

@media (max-width: 545px) and (min-width: 453px) {
        margin-top: 2rem;
    }

    @media (max-width: 452px) and (min-width: 400px) {
        margin-top: 2rem;
    }

    @media (max-width: 399px) and (min-width: 375px) {
        margin-top: 2rem;
    } */
    
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
    background: linear-gradient(180deg, #1a1a1a 45%, #1a1a1a 96.61%);
    color: #fff;
    overflow: hidden;
    position: relative;
    z-index: 1;
    margin-top: 2rem;

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
    padding: 2rem 2rem 0rem 2rem;
    z-index: 2;

    h1 {
        margin-bottom: 1rem;
        font-size: 2.3rem;
    }

    h2 {
        font-size: 1.6rem;
        margin-top: 0.5rem;
    }

    h3 {
        font-size: 1.4rem;
        text-transform: uppercase;
    }

    p {
        padding: 0 23rem;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;
    }


   }

    .logobackground {
        position: absolute;
        align-self: center;
        overflow: hidden;
        width: 800px;
        z-index: 1;
        object-position: cover; 
    }

    .logobackground img {
         animation: ${Glitch} 1.5s infinite ease-in-out;
    }

    .aboutinfo img{
        max-width: 320px;
    }
    
    ul {
        z-index: 3;
    }

    ul i {
        font-size: 2rem;
        color: #f9f9f9;
        
    }
    

    li {
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border: double 1px transparent;
        border-radius: 0.6rem;
        background-image: linear-gradient(-98deg, #1a1a1a 70%, #3d3d3d), linear-gradient(-198deg , #3d3d3d, #92c03e 98%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        box-shadow: 6px 6px 6px 1px rgba(0, 0, 0, 0.4);
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        width: 33vw;
        height: 56px;
     
    }

    @media (max-width: 1280px) and (min-width: 1024px) {
         .aboutinfo {

        p {
        padding: 0 17rem;
        
        }

        }
    }

    @media (max-width: 1023px) and (min-width: 884px) {
         .aboutinfo {

        p {
        padding: 0 14rem;
        
        }

        }

        li {
        width: 43vw; 
    }


    }

    @media (max-width: 883px) and (min-width: 741px) {
         .aboutinfo {

        p {
        padding: 0 9rem;
        
        }

        }

        li {
        width: 53vw; 
    }

    }

    @media (max-width: 740px) and (min-width: 565px) {
         .aboutinfo {

        p {
        padding: 0 3rem;
        
        }

        }

          li {
        width: 63vw; 
    }
    }

    @media (max-width: 564px) and (min-width: 435px) {
         .aboutinfo {

        p {
        padding: 0 0rem;
        
        }

        }

              li {
        width: 79vw; 
    }
    }

    @media (max-width: 434px) and (min-width: 375px) {
         .aboutinfo {
            h1 {
       
        font-size: 2rem;
    }

        p {
        padding: 0 0rem;
        
        }

        }

                 li {
        width: 83vw; 
    }

    .aboutinfo img{
        max-width: 280px;
    }
    }

`


export const Services = styled.div`
    display:flex;
    gap: 1rem;
    flex-direction: column;
    background: linear-gradient(180deg, #1a1a1a 1% , #1a1a1a 6.61%);
    color: #fff;
    padding: 2rem 0rem 0rem 0rem;
    

    h1 {
        margin-top: 1rem;
        font-size: 2.3rem;
    }

    h2 {
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    
    

    .card {
        display:flex;
        height: 50vh;
        margin-top: 2rem;
        
    }

    .card:nth-child(5) {
        flex-direction: row-reverse;

        img {
            border-radius:2rem 0rem 0rem 2rem;
        }

        .cardtitle {
            border-radius:2rem 0rem 0rem 0rem;
        }
    }

    .card .cardtitle {
        position:absolute;
        background: linear-gradient(180deg, #3d3d3d 45%, rgba(0, 0, 0, 0.3) 96.61%);
        padding: 1.6rem;
        font-size: 1.2rem;
        border-radius:0rem 2rem 0rem 0rem;
        width: 50vw;
        
       
    }

   
    .card img {
        width: 50vw;
        object-fit: cover;
        border-radius:0rem 2rem 2rem 0rem;
    }

    p {
        font-size: 1.2rem;
        padding: 2rem 6rem 2rem 4rem;
        align-self: center;
        text-align: start;
        line-height: 1.6rem;
        font-weight: 300;
    }

    @media (max-width: 1280px) and (min-width: 962px) {
        p {
        padding: 2rem 2rem;
    }  
    }

    @media (max-width: 962px) and (min-width: 765px) {
     

        
        p {
        padding: 2rem 2rem;
    }  
    }

    @media (max-width: 764px) and (min-width: 432px) {
        .card {

            height: 60vh;
            flex-direction:column;
        }

        p {
            font-size: 1rem;
        padding: 2rem 2rem;
        
    }

    .card .cardtitle {
        width: 60vw;
        padding: 1rem;
    }

   
    .card img {
        width: 60vw;
    }

    .card:nth-child(5) {
       flex-wrap: wrap;

    }

    
    }

    @media (max-width: 431px) and (min-width: 375px) {
       
    .card {
            flex-direction:column;
            margin-bottom: 2rem;
        }



        .card .cardtitle {
        width: 90vw;
        padding: 1rem;
        font-size: 1rem;
       
    }

   
    .card img {
        width: 90vw;
    }

    .card:nth-child(5) {
       flex-wrap: wrap;

    }


        p {
            line-height: 1.4rem;
            font-size: 1rem;
        padding: 1rem;
        margin-top: 0.5rem;
    }

    
    }
`

export const ClientsCases = styled.div`
    display:flex;
    background: linear-gradient(180deg, #1a1a1a 1% , #1a1a1a 7.61%);
    gap: 1rem;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: #1a1a1a;
    color: #fff;
    text-align: center;
    padding: 3rem 0rem 3rem 0rem;

    img {
        margin-top: 1rem;
        max-width: 360px;
        margin-bottom: 1rem;
    }

    img:nth-child(4) {
        max-width: 280px;
        animation: ${Glitch} 2s infinite ease-in-out;
    }

    p {
        padding: 0 1rem;
    }

    i {
      font-size: 2rem;  
    }

    /* .clients {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .clients img {
        max-width: 90px;
        border-radius:20rem;
    } */

    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
        
    }    

    .itemcontacts {
        display: flex;
        border-bottom: 1px solid;
        border-image: linear-gradient(to left, #1a1a1a , #92c03e , #1a1a1a ) 1;
	    border-left: 0;
	    border-right: 0;
	    border-top: 0;
        margin-top: 1rem;


        i {
            font-size: 1.6rem;
            color:#92c03e;
        }
    }

    @media (max-width: 431px) and (min-width: 375px) {
       padding: 4rem 0rem 3rem 0rem;


        img {
        
        max-width: 280px;
    
    }

    
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

    h3 {
        margin-top: 1rem;
    }

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