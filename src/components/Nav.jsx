export default function Nav({ children, navType, isNavExpanded }) {
    return (
        <nav className={navType}>
            <ul className={isNavExpanded ? "nav expanded" : "nav"}>
                {children}
            </ul>
        </nav>
    )
}