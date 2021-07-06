import { useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/store';

const Navbar = () => {
    const { name } = useSelector((state: IRootReducer) => state.auth);

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                {name}
            </span>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                <span> Exit</span>
            </button>
        </div>
    )
}
export default Navbar;