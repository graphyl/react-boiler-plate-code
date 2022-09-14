import { useState } from 'react';
import './App.css';

import { About, Contact, Home, Layout, NotFound } from './components';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <NotFound />,
    },
    {
        path: '/contact',
        element: <Contact />,
        errorElement: <NotFound />,
    },
]);

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        </>
    );
}

export default App;
