import '../assets/Header.css';

export default function Header(props) {
// export default function Header({title}) {
    return (
        <header className='Header'>
            <h1>{props.title}</h1>
            {/* <h1>{title}</h1> */}
        </header>
    );
}