import axios from "axios"

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0c633cf27d824c92903c1d9c3bc4e903'
    }

})