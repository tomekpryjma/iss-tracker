import React, {useState, useEffect} from 'react';
import astronautImage from '../images/astronaut.svg';

export default function Astronaut(props) {

    const [wikipediaLink, setWikipediaLink] = useState('');

    const generateWikiLink = () => {
        let slugifiedName = props.name.replace(' ', '_');
        slugifiedName = slugifiedName.replace('Anatoly', 'Anatoli');

        return `https://en.wikipedia.org/wiki/${slugifiedName}`;
    }

    useEffect(() => {
        setWikipediaLink(generateWikiLink);
    }, [])

    return(
        <a className="astronaut card" target="_blank" rel="noopener noreferrer" key={props.key} href={wikipediaLink}>
            <span className="card-inner">
                <h3 className="name">{props.name}</h3>
                <img className="image" src={astronautImage} alt="Astronaut"/>
            </span>
        </a>
    );
}