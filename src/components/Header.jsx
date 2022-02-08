import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "antd/dist/antd.css";
import { PageHeader, Button } from 'antd';


function Header() {
    return (
        <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Good Rental Homes"
            subTitle="Rating the landlord"
            extra={[
                <Button key="3">Tenant</Button>,
                <Button key="2">Tenancy</Button>,
                <Button key="1" type="primary">
                    Landlord
                </Button>,
            ]}
        >
        </PageHeader>
    );
}

export default Header;
