import styled from 'styled-components';


const TagCA = styled.h2`
    font-weight: 500;
    color: var(--white);
    position: relative;
    display: inline-block;
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 3px;
        width: 101%;
        height: 10px;
        background-color: orangered;
        z-index: -1;
        transform-origin: center bottom;
        transition: transform 100ms linear;
    }

    &:hover::after {
        transform: scale(1.01, 2.1);
        transition: transform 100ms linear;

    }

`;


export default TagCA;