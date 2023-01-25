import React from 'react'
import { Showcase1Container } from '../showcase1-container/Showcase1Container'
import { Showcase2Container } from '../showcase2-container/Showcase2Container'

export const Showcase = (props) => {
    var showcaseContainer
    if (props.item.type === "showcase1") {
        showcaseContainer = <Showcase1Container key={props.index} item={props.item} index={props.index} />
    } else {
        showcaseContainer = <Showcase2Container key={props.index} item={props.item} index={props.index} />
    }
    return <>
        {showcaseContainer}
    </>
}
