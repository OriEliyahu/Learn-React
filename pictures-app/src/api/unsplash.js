import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UPo5EtC5-FZdpVbXr2wpWB3IL8UFjS6PM0eOqVYX_nc'
    }
});