import styled from 'styled-components';

import ButtonCA from '../ButtonCA';


const HeaderCA = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 5%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
  
    /* background: var(--black); */
    /* border-bottom: 3px solid var(--primary); */

    @media (max-width: 800px) {
        justify-content: center;
       
        & > ${ButtonCA} {
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--primary);
            color: var(--white);
        }
    }
`;

export default HeaderCA;