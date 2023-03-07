import axios from 'axios';

export class NftApi {
  static async fetchNftList(address) {
    const response = await axios.get(`https://api.opensea.io/api/v1/assets?owner=${address}`);
    const data = await response.json()
    return data.assets;
  };
}

