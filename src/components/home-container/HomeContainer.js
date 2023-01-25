import React from 'react'
import './HomeContainer.css';
import { Showcase } from './showcase/ShowCase';

export const HomeContainer = () => {

    const showCaseData =
        [
            {
                type: "showcase1",
                title: "Setup your profile & preferences",
                content: "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
                image: "./assets/work1.png"
            },
            {
                type: "showcase2",
                title: "Review your custom box",
                content: "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
                image: "./assets/work2.png",
                showdowImage: "./assets/work2-art.png"
            },
            {
                type: "showcase1",
                title: "Try it on at home",
                content: "Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you're not in love with.",
                image: "./assets/work3.png"
            }
        ];

    return (<>
        <div data-testid="home-container" className="main-container">
            <div className="top-section-main">
                <div className="top-section-content">
                    <div className="left-container">
                        <h1>Look good without leaving your house</h1>
                        <p> Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
                        <span className='home-signup'><a href='./' className="home-signup-label">SIGN UP {" >"} </a></span>
                    </div>
                </div>
            </div>
            <div className="how-it-works-container" >
                <h1 className="how-it-works-container-title">How it works? <br /> <img className="underline" src='./assets/underline.png' alt='underlinepic' /> </h1>
            </div>
            {
                 showCaseData.map((item, index) => <Showcase key={index} item={item} index={index} />)
            }
        </div>
        <div className="try-it-container">
            <a className="home-signup" href="./" style={{ textAlign: 'center' }}>TRY IT FOR YOURSELF {">"} </a>
        </div>
    </>)
}
