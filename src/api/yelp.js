import axios from 'axios';

const apiKey =
  'imy8g09urP19s5xSIANapPLIpxV5Q0iA4HorSNT7cDIMu8VlZluiwey5BN2wkkwMBikz0ZDIlrllg0sYPp9kthvlJbGSjpv0HhMjuTabFO108EatMl0Op80YOWBIXnYx';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
});
