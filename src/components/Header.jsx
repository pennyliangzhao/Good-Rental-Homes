import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "antd/dist/antd.css";
import { PageHeader, Button } from 'antd';


function Header() {
    return (
        <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Rate Landlord"
        >
        </PageHeader>
    );
}

export default Header;
