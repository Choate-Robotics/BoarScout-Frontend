import axios from 'axios';

const PROD_URL = "https://splashapps.co/api/7407/"

export async function requestServer(data) {

    try {

        const response = await axios({
            method: data.method,
            url: `${PROD_URL}${data.endpoint}`,
            data: data.data || null
        });

        if(response.status == 200) {
            return response.data;
        } else {
            return false;
        }

    } catch (err) {
        return false;
    }

}