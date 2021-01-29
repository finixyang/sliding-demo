import React from "react";
import { FiledWarper } from "./styled/filed";
import { SlidingTitleWarper } from "./styled/slidingTitle";
import { TitleMoreWarper } from "./styled/titleMore";

export const SlidingHeader = ({  listTitle, moreTitle }) => {
    const styles = {
        display: 'flex', 
        justifyContent: 'space-between',
        borderBottomWidth: '1px',
        borderBottomColor: '#CCC',
        borderBottomStyle: 'solid',
        padding: '0 15px'
    };
    return <FiledWarper style={{...styles}}>
        <SlidingTitleWarper>{listTitle}</SlidingTitleWarper>
        <TitleMoreWarper>{moreTitle}</TitleMoreWarper>
    </FiledWarper>
};