import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
    return (
        <div>
            <AuthTemplate>
                <AuthForm />
            </AuthTemplate>
        </div>
    );
};

export default RegisterPage;