import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row, Card, Col} from "react-bootstrap"; // Добавили Col

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Col key={brand.id} className="p-1">
                    <Card
                        style={{cursor: 'pointer'}}
                        className={`p-3` + (device.selectedBrand && device.selectedBrand.id === brand.id ? '  text-bg-primary mb-3' : '')}
                        onClick={() => device.setSelectedBrand(brand)}

                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    );
});

export default BrandBar;