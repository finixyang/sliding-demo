import React from "react";
import { SlidingListWarper } from "./styled/slidingList";
import { SlidingHeader } from "./SlidingHeader";
import { SlidingItem } from "./SlidingItem";
import { FiledWarper } from "./styled/filed";
import "./styled/base.css";

export const SlidingList = ({ slidingList, slidingProps, itemNameClick }) => {
    const [ slidingData, setSlidingData ] = React.useState([...slidingList]);
    const [ renderData, setRenderData ] = React.useState([...slidingData].slice(0, slidingProps.listNum));
    let [ moveFlag, setMoveFlag ] = React.useState(false);
    let timer;
    const changeData = () => {
        let firstItem = slidingData.shift();
        slidingData.push(firstItem); 
        setSlidingData(slidingData);
        setRenderData([...slidingData].slice(0, slidingProps.listNum));//每次只渲染指定显示数目的item
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
    return <SlidingListWarper {...slidingProps} className='sliding-box'>
        <SlidingHeader {...slidingProps} />
        <FiledWarper style={{...listBox}} 
            onMouseOver={()=>{stopTimer()}} 
            onMouseOut={()=>{startTimer()}}
            onClick={(e)=>{itemNameClick(e)}}>
            {renderData&&renderData.map((slidingItem) => {
                const itemInfo = {
                    slidingProps,
                    slidingItem
                }
                return <SlidingItem {...itemInfo} key={`${slidingItem.id}_${slidingItem.name}`} />
            })}
        </FiledWarper>
    </SlidingListWarper>

};