import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DraftLayout from '@/components/templates/DraftLayout'
import DraftPage from '@/components/pages/DraftPage'
import { ThemeProvider, useTheme } from '@mui/material'
import { lightTheme } from '@/assets/theme'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
    },
    {
        path: '/:militaryUnit',
        element: <DraftLayout />,
        children: [
            {
                path: '/:militaryUnit/:draft',
                element: <DraftPage />,
            },
        ],
    },
])

export const App = () => {
    const outerTheme = useTheme()

    return (
        <ThemeProvider theme={lightTheme(outerTheme)}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}
