import React, { useState, useEffect } from 'react';
import './styles.css';

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

    function handleClick(props) {
        setImage(props.image);
        setName(props.name);
    }

    function resetData() {
        setImage(null);
        setName(null);
    }

    return (
        <>
            <div className="list">
                <ul>
                    <li onClick={() => resetData()}>
                        Reset
                </li>
                </ul>
                {data.map((item, index) =>
                    <ul key={index} onClick={() => handleClick(item)} >
                        <li>
                            {item.name}
                        </li>
                    </ul>
                )}
            </div>
            {image ? <div className="image"> <img src={image} alt={name} />  </div> : <> </>}
            <svg className="fire">
                <circle cx="30" cy="30" r="10" fill="green" />
            </svg>

            <div class="portal">
                <div class="swish">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="swirl">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="swirl">
                        <span></span>
                        <div class="swirl">
                            <span></span>
                            <div class="swirl">
                                <span></span>
                                <div class="swirl">
                                    <span></span>
                                    <div class="swirl">
                                        <span></span>
                                        <div class="swirl">
                                            <span></span>
                                            <div class="swirl">
                                                <span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;