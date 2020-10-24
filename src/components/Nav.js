import './Nav.css';

function Nav({ className, children }){
    return (
        <nav className={className}>
            {children}
        </nav>
    )
}

export default Nav;