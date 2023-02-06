function Header() {
    return <nav className={'light-blue lighten-1'}>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">React Films</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="!#">Repo</a></li>
            </ul>
        </div>
    </nav>
}

export {Header}