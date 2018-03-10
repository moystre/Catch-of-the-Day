import React from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {
    render() {
        // comment outside of jsx
        return (
        <form className="store-selector">
            { /* Legit comment inside a jsx (return) */}
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name"/>
            <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;