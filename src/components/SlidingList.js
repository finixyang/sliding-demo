import React from "react";
import { SlidingListWarper } from "./styled/slidingList";
import { SlidingHeader } from "./SlidingHeader";
import { SlidingItem } from "./SlidingItem";
import { FiledWarper } from "./styled/filed";
import "./styled/base.css";

export const SlidingList = ({ slidingList, slidingProps, itemNameClick }) => {
    const [ slidingData, setSlidingData ] = React.useState([...slidingList]);
    let [ moveFlag, setMoveFlag ] = React.useState(false);
    let timer;
    const changeData = () => {
        let firstItem = slidingData.shift();
        slidingData.push(firstItem); 
        setSlidingData(slidingData);
        setMoveFlag(!moveFlag);
    };
    const startTimer = () => {
        if (timer == null) {
            timer = setInterval(changeData, 2000);
        }
    }
    const stopTimer = () => {
        clearInterval(timer);
        timer = null;
    }
    React.useEffect(()=>{
        //没间隔两秒把数组的第一个元素迁移到数组的最末尾
        startTimer();
        return () => {
            stopTimer();
        };
    },[moveFlag]);

    const listBox = {
        padding: '5px 15px'
    }
    return <SlidingListWarper className='sliding-box'>
        <SlidingHeader {...slidingProps} />
        <FiledWarper style={{...listBox}} 
            onMouseOver={()=>{stopTimer()}} 
            onMouseOut={()=>{startTimer()}}
            onClick={(e)=>{itemNameClick(e)}}>
            {slidingData&&slidingData.map((slidingItem) => {
                const itemInfo = {
                    slidingProps,
                    slidingItem
                }
                return <SlidingItem {...itemInfo} key={`${slidingItem.id}_${slidingItem.name}`} />
            })}
        </FiledWarper>
    </SlidingListWarper>

};