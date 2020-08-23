import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div`
    /* border: 1px solid yellow; */
    width: 100%;
    padding: 20px 10px;
    position: relative;
`;
export const LabelCA = styled.label`
    position: absolute;
    top: 31px;
    left: 25px;
    cursor: text;
    transition: all 100ms linear;

`;
export const FieldCAStyle = styled.input`
    outline: none;
    background: none;
    width: 100%;
    padding: 10px 15px;
    border-radius: 3px;
    border: 1px solid var(--white);
    border-bottom: 2px solid var(--white);
    color: var(--white);
    transition: border-bottom-color 200ms linear;

    ${({ value }) => {
        const testValue = value.length > 0;
        return testValue && css`
            & + ${LabelCA} {
                top: -6px;
                left: 10px;
                font-size: 12px;
                transition: all 100ms linear;
            }
            border-bottom-color: var(--primary) !important;
        `;
    }}
`;
