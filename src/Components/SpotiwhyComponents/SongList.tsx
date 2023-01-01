import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar'

interface Data {
    totalListening: Object
}

const SongList = (props: Data) => {
    var songTitles = Object.keys(props.totalListening)
    var songPlays = Object.values(props.totalListening)


    return (
        <div>

            <List>
                {songTitles.map(function (title, index) {

                    var stringVal = title.replace("o,", 'o').split(",")
                    var artistName = stringVal[1].replace('(', '').replace(')', '').replace("'", '').replace("'", '')
                    var songTitle = stringVal[0].replace('(', '').replace("'", '').replace("'", '')
                    if(index >4){
                    
                    }else{
                    return (<ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Typography>{index+1}</Typography>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={songTitle} secondary={artistName + ' - Plays: ' + songPlays[index]}></ListItemText>
                    </ListItem>)}
                })}

            </List>

        </div>
    )
}

export default SongList