import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button class="btn bg-gradient-to-r from-primary to-secondary border-none">{children}</button>
        </div>
    );
};

export default PrimaryButton;