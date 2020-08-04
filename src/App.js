import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{
    state = {
        data: {},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData })
    }

    render(){
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <jumbotron> <h1 className='chase-covid'>Chasing Covid</h1></jumbotron>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App; 