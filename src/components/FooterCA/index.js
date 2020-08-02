import styled from 'styled-components';
import LinkCA from '../LinkCA';


const FooterCA = styled.footer`
    width: 100%;
    padding: 10px 0;

    background: var(--black);
    color: var(--white);
    border-top: 2px solid var(--primary);

    display: flex;
    flex-direction: column;
    align-items: center;

    ${LinkCA}:hover {
        color: var(--primary);
    }

    & > p {
        font-weight: 300;
    }
`;

export default FooterCA;