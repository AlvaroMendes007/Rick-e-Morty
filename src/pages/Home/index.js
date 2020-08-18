import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './styles.css';

const LinkName = styled.div`
    color: green;
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: auto auto auto;
    padding: 10px;
`

function Home() {

    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((results) => results.json())
            .then((data) => {
                setData(data.results);
            })
    }, []);

    function handleClick(props){
        setImage(props.image);
        setName(props.name);
    }

    function resetData(){
        setImage(null);
        setName(null);
    }

    return (
        <div className="list">
            <LinkName href="#" onClick={() => resetData()}>
                Reset
            </LinkName>
            {data.map((item, index) => 
                <ul key={index} onClick={ () => handleClick(item)} >
                    <LinkName href="#">
                        {item.name}
                    </LinkName>
                </ul>
            )}
            {image ? <img src={image} alt={name} /> : <> </>}
        </div>
    )
}

export default Home;