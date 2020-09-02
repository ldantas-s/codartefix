import styled from 'styled-components';


export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    padding: 0 70px;
    display: flex;
    align-items: center;
    z-index: 15;
    border-bottom: 3px solid transparent;
    transition: background-color 100ms linear, border-bottom 100ms linear;
`;
Header.Menu = styled.ul`
    list-style: none;
    padding: 2px 20px;
    margin-left: 20px;
    display: flex;
    border-left: 1px solid rgba(255,255,255,.5);

    & > li:nth-child(2):hover > ul {
       transform: scaleY(1);
       transition: transform 100ms linear;
    }
    & > li {
        padding-bottom: 10px;
    }
`;
Header.MenuItem = styled.li`
    position: relative;
    color: white;
    &:first-child {
        margin-right: 15px;
    }
    & > a {
        text-decoration: none;
        color: rgba(255,255,255,.8);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
    & > a:hover {
        color: white;
        transition: all 100ms;
    }
`;

Header.Dropdown = styled.ul`
    position: absolute;
    top: 38px;
    list-style: none;
    padding: 10px;
    color: white;
    background: rgb(0,0,0);
    border: 1px solid var(--primary);
    display: grid;
    grid-gap: 5px;
    
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 100ms linear;

`;
Header.DropdownItem = styled.li`
    padding: 5px;
    cursor: pointer;
`;