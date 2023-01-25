import React from 'react'
import './Showcase2Container.css';

export const Showcase2Container = (props) => {
    return <>
        <div data-testid="showcase-container" className="showcase2-container">
            <div className="showcase">
                <div className='left-image-container'>
                <span className={"num number" + (props.index + 1)}>{props.index + 1}</span>

                <img className={"showcase2pic"} src={props.item.image} alt='pic' />

                {props.item.showdowImage &&
                        <img className="showdowImage" src={props.item.showdowImage} alt='pic' />
                    }

                </div>
                <div className='right-content-container'>
                    <h1 className={"section-title section-title" + (props.index + 1)}>{props.item.title} </h1>
                    <p className={"section-left section-left" + (props.index + 1)}>{props.item.content} </p>
                </div>
            </div>
        </div>
    </>
}
