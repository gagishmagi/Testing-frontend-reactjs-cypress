// in app.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';


export default function AdminApp() {
    return (
        <Admin dataProvider={simpleRestProvider('http://localhost:5000/api')}>
            <Resource name="posts" list={PostList} />
        </Admin>
    )
}
