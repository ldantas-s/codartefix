import styled from 'styled-components';


const Button = styled.button`
    text-decoration: none;

    padding: 8px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    color: var(--white);
    border: 1px solid var(--white);

    &:hover {
        background: var(--white);
        color: var(--black);
        transition: all .1s ease-in-out .1s;
    }
`;

export default Button;