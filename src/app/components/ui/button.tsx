export default function Button({text, size='',px='px-4', py='py-2', color, border='', click=()=>{}}): JSX.Element {

    return (
        <button className={`${border} ${size} rounded-md ${color} ${px} ${py}`} onClick={click}> {text}</button>
    );
}
