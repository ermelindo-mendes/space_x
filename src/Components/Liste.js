import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';

function Recherche() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/crew`)
            setData(response.data)
            setIsLoading(false)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {isLoading ? <h1>loading </h1> : <div>
                <h1>Liste Membres Crew :</h1>
                <ul>
                    {data.map((item) => (
                        <Card key={item.name} style={{ width: '18rem' }}>
                            <Card.Body
                                onClick={() => {
                                    navigate(`/detail/${item.id}`)
                                }}
                            >
                                <li style={{
                                    listStyle: 'none',
                                }} >
                                    <img style={{
                                        width: '18rem'
                                    }}
                                        src={item.image}></img>
                                </li>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Voici les informations sur le membre de l'équipage : {item.name}
                                </Card.Text>
                                <Button variant="primary">En savoir plus</Button>
                            </Card.Body>
                        </Card>




                    ))}
                </ul>
            </div>}
        </>)


}

export default Recherche;