import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ isAuthenticated, component:Component, ...rest }: any) => {
    
    return (        
        <Route {...rest}
            component={(props: any) => (
                (isAuthenticated)
                    ? <Redirect to="/" />
                    : <Component {...props} />
                     
            )}
        />
    )
}

PublicRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}




