import React from 'react';
// Styles
import { FieldCAStyle, FieldWrapper, LabelCA } from './style';


export default function FormFieldCA({ label, type, name, value, onChange, autocomplete }) {
    const tag = type === 'textarea' ? 'textarea' : 'input';
    
    return (
        <FieldWrapper>
            <FieldCAStyle
                as={tag}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                id={name}
                autoComplete={ autocomplete || 'off'}
            />
            <LabelCA htmlFor={name}>
                { label }
            </LabelCA>
        </FieldWrapper>
    );
}