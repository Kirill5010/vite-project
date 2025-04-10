import './MyButton.css'

function MyButton({active, onClick, children}) {
   

   return ( <button onClick={onClick} className={active ? 'my-button active' : 'my-button'}>{children}</button> );
}

export default MyButton;