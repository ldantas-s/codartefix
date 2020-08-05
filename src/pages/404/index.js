import React from 'react';
import { Link } from 'react-router-dom';
import { FiFrown } from 'react-icons/fi';
// Styles
import { Main404 } from './style';
// Components
import ButtonCA from '../../components/ButtonCA';


export default function Page404() {
    return(
        <Main404>
            <Main404.ErrorContent>
                <h1>4<FiFrown />4</h1>
                <p>Page not found</p>
            </Main404.ErrorContent>
            <ButtonCA as={Link} to="/">Back Home</ButtonCA>
        </Main404>
    );
}