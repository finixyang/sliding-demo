import styled from "styled-components";

export const SlidingItemWarper = styled.div`
    height: ${(props) => `${props.height || 40}px`};
    display: flex;
    justify-content: space-between;
`;