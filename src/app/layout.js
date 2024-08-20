import HeaderCafe from '@/components/headerCafe'
import Container from '@/components/layout/containerCafe'

import { Montserrat } from 'next/font/google'

import '@/app/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'Café Reparo',
    description: 'Café Reparo em Jaraguá do Sul, SC.',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="pt-br">
            <body className={montserrat.className}>
                <Container>
                    <HeaderCafe />
                    <main className={'flex justify-center w-full'}>{children}</main>
                </Container>
            </body>
        </html>
    )
}

export default RootLayout
