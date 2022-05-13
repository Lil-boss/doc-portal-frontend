import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button class="btn bg-gradient-to-r from-primary to-secondary border-none text-white">{children}</button>
        </div>
    );
};
export default PrimaryButton;