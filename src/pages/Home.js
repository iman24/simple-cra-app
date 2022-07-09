import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

export default function Home()
{
  const [posts, setPost] = useState([]) 
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    const data = async function(){
      let datas = await fetch('https://jsonplaceholder.typicode.com/posts')
      return await datas.json();
    }
    data().then((res) => {
        setPost(res)
        setLoading(false)
    })
  });


    return (
        <Container className="mt-5">
           { loading ? 'Loading data...' : (<Row>
                { posts.map(post =>  <Col key={post.id} className="mb-2"><CardComponent id={post.id} body={post.body.substring(0, 100)} title={post.title.substring(0, 20)} width="20rem"/></Col>)}
           </Row>) }
        </Container>
    )
}