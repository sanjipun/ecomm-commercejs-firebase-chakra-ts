import React, { ReactNode, useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

interface RouteGuardProps {
    children?: ReactNode
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const history = useHistory();
    const Login = useSelector((state: RootStateOrAny) => state.firebase.auth)
    useEffect(() => {
        if (!Login.uid) {
            history.push("/auth/login");
        }
    }, [Login, history]);
    return (
        <>
            {Login && children}
        </>
    );
};

export default RouteGuard;