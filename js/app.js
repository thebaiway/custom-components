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
            <h1>I'm excited to learn React!</h1>
            <ol>
                <li>It's a fun way to learn JS, after learning Vanilla JS</li>
                <li>It'll make me more marketable</li>
                <li>I just love learning new things!</li>
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

function ComponentPage () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

root.render(
    <ComponentPage />
)