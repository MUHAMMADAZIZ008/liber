import Header from "../header/header"

function MainLayout({children}) {
    return <>
        <Header/>
        <main>
            {children}
        </main>
    </>
}

export default MainLayout