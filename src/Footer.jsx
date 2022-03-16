import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return <footer>
    <p>Copyright © <a href="https://github.com/bxavace">bxavace</a> {year}</p>
    </footer>
}

export default Footer;