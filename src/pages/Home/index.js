import React, { useState, useEffect } from 'react';
import './styles.css';

function Home() {

    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [gender, setGender] = useState(null);
    const [specie, setSpecie] = useState(null);
    const [page, setPage] = useState(1);

    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    useEffect(() => {
        fetch(url)
            .then((results) => results.json())
            .then((data) => {
                setData(data.results);
            })
    }, [page]);

    function handleClick(props) {
        setImage(props.image);
        setName(props.name);
        setGender(props.gender);
        setSpecie(props.species);
    }

    function resetData() {
        setImage(null);
        setName(null);
        // setPage(page+1)
    }

    function upPage(){
        (page >= 34 ? setPage(34) : setPage(page+1))
    }

    function downPage(){
        (page <= 1 ? setPage(1) : setPage(page-1))
    }

    return (
        <>
            <button onClick={upPage}>
                +1
            </button>

            <button onClick={downPage}>
                -1
            </button>

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

            {image ?
                <div className="image">
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

                    <div className="character">
                        <img src={image} alt={name} />
                        <p className="name">Name: {name}</p>
                        <p className="specie">Specie: {specie}</p>
                        <p className="gender">Gender: {gender}</p>
                    </div>

                </div>
                :
                <> </>
            }


        </>
    )
}

export default Home;