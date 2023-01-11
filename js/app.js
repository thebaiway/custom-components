const root = ReactDOM.createRoot(document.getElementById("root"))

function Header () {
    return (
        <header>
                <nav className="nav">
                <img src="img/react-logo.png" className="react-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1 className="title">Learning React</h1>
            <ol>
                <li>Fun To Learn After Vanilla J.S</li>
                <li>Will Make You More Marketable.</li>
                <li>Will Make You More $.</li>
            </ol>
        </div>
    )
}

function Footer () {
    return (
        <footer>
            <small>© 2023 Roby Development. All rights reserved.</small>
        </footer>
    )
}

function App () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

root.render(
    <App />
)