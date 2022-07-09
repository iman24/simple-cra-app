import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";

export default function Post()
{

    const [post, setPost] = useState({}) 
    const [loading, setLoading] = useState(true) 
    const { id } = useParams()

    useEffect(() => {
      const data = async function(){
        let datas = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        return await datas.json();
      }
      data().then((res) => {
          setPost(res)
          setLoading(false)
      })
    });
  


    return (
        <Container className="mt-5">
               { loading ? 'Loading data...' : (<CardComponent key={post.id} id={post.id} body={post.body} title={post.title} width="auto"/>) }
        </Container>
    )
}