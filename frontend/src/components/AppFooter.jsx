import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const AppFooter = () => {
    return (
        <Container fluid className="fixed-bottom bg-success">
            <p className="pt-3 text-white">
                &copy; 2023 技育CAMP vol.10 チーム札幌
            </p>
        </Container>
    )
}

export default AppFooter