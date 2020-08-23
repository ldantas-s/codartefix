import React, { useState } from 'react';
// Components
import PageDefault from '../../PageDefault';
import FormFieldCA from '../../../components/FormFieldCA';
import ButtonCA from '../../../components/ButtonCA';
// Styles
import { CategoryPageMain, CategoryForm, CategoryTable } from './style';




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
                        <CategoryForm.SectionInput>
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
                        </CategoryForm.SectionInput>

                        <FormFieldCA
                            label="Category Description"
                            type="textarea"
                            name="categoryDescription"
                            value={values.categoryDescription || ''}
                            onChange={handleChange}
                        />
                        
                        <CategoryForm.SectionButton>
                            <ButtonCA>Register</ButtonCA>
                        </CategoryForm.SectionButton>

                            {/* {categories.map((category, index) => (
                                <li key={index}>{category.categoryName}</li>
                            ))} */}
                        <CategoryTable>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map(( { categoryName, categoryDescription }, index ) => (
                                        <tr key={index}>
                                            <td>{ categoryName }</td>
                                            <td>{ categoryDescription }</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </CategoryTable>
                    </CategoryForm>
                </CategoryPageMain.Content>
            </CategoryPageMain>
        </PageDefault>
    );
}