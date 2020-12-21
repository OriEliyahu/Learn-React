import { useState, useEffect } from 'react';
import axios from 'axios';

const useWikipedia = (defaultTerm) => {
    const [term, setTerm] = useState(defaultTerm);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };

        const timeOutID = setTimeout(() => {
            if (term)
                search();
        }, 500)

        return () => {
            clearTimeout(timeOutID);
        }
    }, [term]);

    return [results, term, setTerm];
}

export default useWikipedia;