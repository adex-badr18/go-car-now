export default function Footer() {
    const date = new Date();

    return (
        <footer>
            <p className="footer-text">&#169; {date.getFullYear} GOCARNOW</p>
        </footer>
    )
}