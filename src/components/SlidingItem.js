import React from "react";
import { FiledWarper } from "./styled/filed";
import { SlidingItemWarper } from "./styled/slidingItem";

export const SlidingItem = ({ slidingProps, slidingItem }) => {
    return <SlidingItemWarper {...slidingProps}>
        <FiledWarper href={slidingItem.href} className='item-title'>{slidingItem.name}</FiledWarper>
        <FiledWarper className='item-address'>{slidingItem.address}</FiledWarper>
        <FiledWarper className='item-time-span'>{slidingItem.timeSpan}</FiledWarper>
    </SlidingItemWarper>

};