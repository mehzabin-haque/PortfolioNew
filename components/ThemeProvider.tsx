'use client'

import {ThemeProvider as NextThemesProvider} from 'next-themes'

type Props = {}

export function ThemeProvider({children,...props}: any) {
    return (
        <NextThemesProvider {...props}>
        {children}
        </NextThemesProvider>
    )
    }