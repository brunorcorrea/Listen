import './styles.css'

export default function Header(props) {
    
    return (
        <>
            <header className="Header">
            <h1 className="ApplicationTitle">
                {props.children}
            </h1>
            </header>
        </>
    );
}