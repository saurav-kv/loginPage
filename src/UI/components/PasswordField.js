import './PasswordField.css'
import ReactDOM from 'react-dom/client';

function MyForm() {
    return (
        <div>
            <form>
                <label>Password
                 <input type="" />
                </label>
            </form>
        </div>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);
  
  export default MyForm;
  
  