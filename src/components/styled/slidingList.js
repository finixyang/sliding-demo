import styled from "styled-components";

export const SlidingListWarper = styled.div`
    width: ${(props)=> `${props.width || 500}px` };
    height: ${(props)=> `${props.height * props.listNum + 40 || 280}px`};
    border: 1px #CCC solid;
    overflow: hidden;
    font-size: 14px;
    border-top-color: black;
    border-top-width: 15px;
    border-top-style: solid;
    border-bottom-color: black;
    border-bottom-width: 15px;
    border-bottom-style: solid;
    border-left-color: black;
    border-left-width: 5px;
    border-left-style: solid;
    border-right-color: black;
    border-right-width: 5px;
    border-right-style: solid;
`;