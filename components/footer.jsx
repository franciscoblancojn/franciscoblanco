import Container from "@/components/container";
import Row from "@/components/row";
import Col from "@/components/col";
import RS from "@/components/rs";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col col={4} className="col-lg-3 col-md-12">
                        Francisco Blanco
                    </Col>
                    <Col col={4} className="col-lg-5 col-md-12">
                        <RS
                        className="email"
                        href="mailto:blancofrancisco34@gmail.com"
                        icon="fas fa-envelope"
                        text="blancofrancisco34@gmail.com"
                        />
                    </Col>
                    <Col col={4} className="col-lg-4 col-md-12">
                        <RS
                        className="whatsapp"
                        href="https://api.whatsapp.com/send?phone=573103557200"
                        icon="fab fa-whatsapp"
                        text="+57 310 355 7200"
                        />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer