import React, { useState } from 'react';
// Components
import PageDefault from '../../PageDefault';
import FormFieldCA from '../../../components/FormFieldCA';
import ButtonCA from '../../../components/ButtonCA';
// Styles
import { CategoryPageMain, CategoryForm } from './style';




export default function CategoryPage() {
    const [ categories, setCategories ] = useState([]);
    const [ values, setValues ] = useState({
        categoryName: '',
        categoryDescription: '',
        categoryColor: ''
    });

    // Captura toda ação qualquer alteração no input
    async function handleChange(event) {
        await setValues({
            ...values,
            [event.target.getAttribute('name')]:event.target.value
        });
    }

    // Função Submit do form
    function handleSubmit(event) {
        event.preventDefault();
        
        setCategories([
            ...categories,
            values
        ]);

        setValues({ categoryName: '', categoryDescription: '' })
    }

    return (
        <PageDefault>
            <CategoryPageMain>
                <CategoryPageMain.Content>
                    <h1>Category Register</h1>
                    <CategoryForm onSubmit={handleSubmit}>
                        <CategoryForm.Section>
                            <FormFieldCA
                                label="Category Name"
                                type="input"
                                name="categoryName"
                                value={values.categoryName || ''}
                                onChange={handleChange}
                            />
                            <FormFieldCA
                                label="Category Color"
                                type="color"
                                name="categoryColor"
                                value={values.categoryColor || '#000'}
                                onChange={handleChange}
                            />
                        </CategoryForm.Section>

                        <FormFieldCA
                            label="Category Description"
                            type="textarea"
                            name="categoryDescription"
                            value={values.categoryDescription || ''}
                            onChange={handleChange}
                        />
                        
                        
                        <ButtonCA>Register</ButtonCA>
                    </CategoryForm>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>{category.categoryName}</li>
                        ))}
                    </ul>
                </CategoryPageMain.Content>
            </CategoryPageMain>
        </PageDefault>
    );
}