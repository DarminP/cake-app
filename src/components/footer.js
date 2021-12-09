import React from "react";
import "../cssFiles/footer.css"

function Footer()
{
    return(
        <div className="myFooter">
        <p className="footerText"> © Copyright 2021 Aidas Cakes. All rights reserved.</p>
        <p className="footerText">Följ mig på instagram:</p>
        <a href="https://instagram.com/aidahadzii?utm_medium=copy_link" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
    )
}

export default Footer;