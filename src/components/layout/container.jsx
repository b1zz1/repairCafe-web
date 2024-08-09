const Container = ({ children }) => {
    return (
        <main className="flex flex-col min-h-screen justify-center items-center bg-purple.1 text-purple.6">
            {children}
        </main>
    )
}

export default Container
