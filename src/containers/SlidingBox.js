import React from "react";
import { SlidingList } from "../components";
import { slidingList } from "../constant";

export const SlidingBox = () => {
    const dataInfo = {
        slidingList: slidingList,
        slidingProps: {
            width: 600,//box width
            height: 40,//item height
            listNum: 8,//default items (width = height * listNum)
            listTitle: '最新职位',
            moreTitle: 'more'
        },
        itemNameClick: (e) => {
            if(e.target.className.includes('item-title')){
                console.log(e.target.attributes.href);
            }
        }
    }
    return <SlidingList {...dataInfo} />
};