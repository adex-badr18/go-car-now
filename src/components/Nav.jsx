export default function Nav({ children }) {
    return (
        <nav>
            <ul className="nav">
                {children}
            </ul>
        </nav>
    )
}