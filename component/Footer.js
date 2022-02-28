import React from "react";

function Footer(props) {
    return (<div>
        <hr color="green" size="3"></hr>
        @CopyRight of capgemini {props.countryName, props.BrandName}
        <a href="">         AboutUs</a>
    </div>)
}
export default Footer;