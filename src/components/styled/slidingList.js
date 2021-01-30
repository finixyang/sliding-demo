import styled from "styled-components";

export const SlidingListWarper = styled.div`
    width: ${(props)=> `${props.width || 500}px` };
    height: ${(props)=> `${props.height * props.listNum + 40 || 280}px`};
    border: 1px #CCC solid;
    overflow: hidden;
    font-size: 14px;
`;