import axios from 'axios';

const KEY =  'AIzaSyCBPJLw2iGwnU1-L_0W1-COhVYk-9PKtGU';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});