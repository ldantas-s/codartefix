import styled from 'styled-components';

import logo from '../../assets/img/codarte-logo.png';


const LogoCA = styled.img.attrs({ src: logo, alt: 'Logo da CodArte' })`
    max-width: 150px;

    /* @media(max-width: 800px) {
        max-width: 105px;
    } */
`;

export default LogoCA;