import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { startChecking } from '../redux/actions/authActions';
import { IRootReducer } from '../redux/store';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector((state: IRootReducer) => state.auth);

    useEffect(()=>{
        dispatch(startChecking());
    }, [dispatch]);

    if(checking){
        return (<h5>Wait...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={!!uid} />
                    <PrivateRoute exact path="/" component={CalendarScreen} isAuthenticated={!!uid} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
export default AppRouter;