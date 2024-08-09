import Header from "@/components/header"
import Container from "@/components/layout/container"

import { Montserrat } from "next/font/google"
import "../globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Repair Café (admin)",
  description: "Generated by create next app",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Container>
            <Header/>
            <main>
              {children}
            </main>
        </Container>
      </body>
    </html>
  )
}

export default RootLayout
