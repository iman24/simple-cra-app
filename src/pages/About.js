import { Container } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

export default function About()
{
    return (
       <Container className="mt-5">
           <CardComponent body="Hello Guys" title="About Me" width="auto"/>
       </Container>
    )
}