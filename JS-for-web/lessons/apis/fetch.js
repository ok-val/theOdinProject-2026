import { visualCrossingKey } from './apikeys.js'
const url1 = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ho%20chi%20minh?unitGroup=us&key=${visualCrossingKey}&contentType=json`;

fetch(url1)
.then(res => {
    return res.json();
})
.then(res => console.log(res.days[0].tempmax))
.catch(err => console.error(err));







