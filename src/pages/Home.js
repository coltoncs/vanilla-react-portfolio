import { useTheme, useUpdateTheme } from '../context/ThemeContext';

export default function Home(){
    const theme = useTheme();
    const toggleTheme = useUpdateTheme();

    const titleString = "Building reactive, data-driven web applications for hobby and self-improvement"

    const styles = {
        color: theme ? 'black' : 'white'
    }

    const btnStyle = {
        margin: '10px',
        padding: '15px',
        background: '#fffff8',
        border: 'none',
        display: 'block',
    }

    return (
        <section>
            <div className="header">
                <h1 style={styles}>{titleString}</h1>
                <br/>
                <span style={styles}>Github - Facebook - LinkedIn</span>
                <button style={btnStyle} onClick={toggleTheme}>{theme ? 'TOGGLE WHITE' : 'TOGGLE BLACK'}</button>
            </div>
        </section>
    );
}