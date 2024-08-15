const Container = ({ children, className }) => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center w-full px-12 bg-purple.1 text-purple.6">
            {children}
        </div>
    )
}

export default Container
