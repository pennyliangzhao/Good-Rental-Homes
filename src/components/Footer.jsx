import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>RentalHomesCopyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;
