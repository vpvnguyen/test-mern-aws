import React from 'react';
import Button from '@material-ui/core/Button';

const handleClicks = () => {
    console.log('mobileapp');
};

export default function MobileApp() {

    return (
        <Button
            type="submit"
            fullWidth
            variant="outline"
            color="inherit"
            onClick={handleClicks}
        >
            Get the App for iOS and Android!
        </Button>
    )
}
