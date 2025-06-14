import logo from '../images/logo.png';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className="header-image" />
            <h1 className="header-title">Chef Guruji</h1>
        </header>
    )
}