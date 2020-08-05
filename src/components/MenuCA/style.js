import styled from 'styled-components';
// Components
import LinkCA from '../LinkCA';

export const NavMenu = styled.nav`
    display: flex;
    justify-content: center;
    width: 30%;
`;

export const SubMenu = styled.ul`
    list-style: none;
    width: 100%;
    position: absolute;
    padding: 8px 15px;
    margin-top: 5px;
    background: rgba(0,0,0,.8);
    border: 1px solid var(--primary);
    transform: scaleY(0);
    &:hover {
        transform: scaleY(1);
    }    
`;
SubMenu.SubItem = styled.li`
    padding: 10px 0;
    &:hover {
        & > ${LinkCA} {
            color: var(--primary);
            font-weight: 500;
            transition: color 100ms linear;
        }
    }
`;

export const Menu = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--white);
    & ${LinkCA} {
        font-weight: 300;
    }

`;
Menu.MenuItem = styled.li`
    position: relative;
    padding: 10px;

    &:hover {
        & > ${LinkCA} {
            color: var(--primary);
            font-weight: 500;
            transition: color 100ms linear;
        }
    }
    &:nth-child(3) ${LinkCA} {
        display: flex;
        align-items: center;
    }
    
    &:nth-child(3):hover ${SubMenu} {
        transform: scaleY(1);
        transform-origin: top center;
        transition: transform 100ms cubic-bezier(.68,-0.55,.27,1.55);
    }
`;
