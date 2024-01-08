import React, { SetStateAction, useState, useEffect } from 'react'
import Charts from '../Components/SpotiwhyComponents/Charts'
import topSongs from '../data/topSongs.json'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import SongList from '../Components/SpotiwhyComponents/SongList'
import Card from '@mui/material/Card';
import { CircularProgress, ToggleButton, ToggleButtonGroup } from '@mui/material'
import axios from 'axios';
import MyAppBar from '../Components/Appbar';

import genreJSON from '../data/genre_all.json'
import playsJSON from '../data/top_plays.json'
import artistsJSON from '../data/artist_all.json'

type dataObject = {
    [key: string]: any;
}

const Spotiwhy = () => {

    const [selectedYear, setSelectedYear] = useState(2018)
    const [genreData, setGenreData] = useState({})
    const [topSong, setTopSong] = useState({})
    const [topSongsData, setTopSongsData] = useState<dataObject>({ 2018: topSongs })
    const [topArtist, setTopArtist] = useState({})
    const [allArtist, setAllArtist] = useState<dataObject>({ 2018: 'hello' })
    const [allGenre, setAllGenre] = useState<dataObject>({ 2018: 'hello' })
    const [yearOptions, setYearOptions] = useState<any>([2018])

    const styles = {}




    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newYear: SetStateAction<number>,
    ) => {
        if (newYear !== null) {
            setSelectedYear(newYear);
            setTopArtist(allArtist[Number(newYear)]);
            setGenreData(allGenre[Number(newYear)]);
            setTopSong(topSongsData[Number(newYear)])
            console.log(topSongsData[Number(newYear)])
            console.log(topSongs)
        }
    };

    async function fetchData() {
        //const artist_data = await axios('https://wmec5lhuje.execute-api.us-east-1.amazonaws.com/dev/api/artist_all')
        //const genre_data = await axios('https://wmec5lhuje.execute-api.us-east-1.amazonaws.com/dev/api/genre_all')
        //const top_plays = await axios('https://wmec5lhuje.execute-api.us-east-1.amazonaws.com/dev/api/top_plays')
        setAllArtist(JSON.parse(artistsJSON))
        setAllGenre(JSON.parse(genreJSON))
        setTopSongsData(JSON.parse(playsJSON))

        console.log(allArtist)
        console.log(JSON.parse(artistsJSON))

        setYearOptions(Object.keys(JSON.parse(genreJSON)))
    }

    useEffect(() => {
        fetchData();
    }, [])




    const sampleYears = yearOptions //replace with get request from server

    if (Object.keys(allArtist).length < 2) {
        return (
            <div
                style={{
                    display: "table",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0
                }}
            >
                <div style={{
                    display: "table-cell",
                    verticalAlign: "middle",
                    textAlign: "center"
                }}>
                    <CircularProgress></CircularProgress>
                    <Typography variant='h5'>Loading...</Typography>
                    <Typography variant='h6'>This may take a minute</Typography>
                </div>
            </div>

        )
    }



    return (<div>
        <MyAppBar></MyAppBar>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '100px' }}>
            <Typography variant='h2'>What I've been Listening to</Typography>
        </div>

        <br></br>
        <hr style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto' }}></hr>
        <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: '20px', textAlign: 'center' }}>
            <Typography variant='h5'>Select Year</Typography>
            <br></br>
            <ToggleButtonGroup defaultValue={2018} onChange={handleChange} value={selectedYear} exclusive color='secondary'>
                {sampleYears.map((year: Number) => {
                    return (<ToggleButton value={year}>
                        {String(year)}
                    </ToggleButton>)
                })}
            </ToggleButtonGroup>


            {
                /* add buttons here to cycle through all the years of data we have
                    buttons hard coded for now, but should be dynamically created and data should be pulled from the backend
                */
            }

        </div>
        <div style={{ padding: '5%', textAlign: 'center' }}>
            <Grid container direction='row' justifyContent="center" alignItems="center" spacing={4}>
                <Grid item xs={12} md={4} direction={'column'} justifyContent='center' style={{ marginTop: 20 }}>
                    <Typography variant='h4'>Plays by Top Genre</Typography>
                    <Charts type='doughnut' totalListening={allGenre[selectedYear]}></Charts>
                </Grid>
                <Grid item container xs={12} md={4} direction={'column'} justifyContent='center' style={{ marginTop: 20 }}>
                    <Typography variant='h4'>Plays by Top Artist</Typography>
                    <Charts type='bar' totalListening={allArtist[selectedYear]}></Charts>
                </Grid>
                <Grid item xs={12} md={4} direction={'column'} justifyContent='center' style={{ marginTop: 20 }}>
                    <Typography variant='h4'>Top Songs</Typography>
                    <Card style={{ maxHeight: '500px', overflow: 'auto' }} elevation={0}>
                        <SongList totalListening={topSongsData[selectedYear]}></SongList>
                    </Card>
                </Grid>
            </Grid>
        </div>
    </div>)
}


export default Spotiwhy