import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "antd/dist/antd.css";
import { PageHeader, Button } from 'antd';


function Header(props) {
    return (
        <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={props.title}
        >
        </PageHeader>
    );
}

export default Header;
