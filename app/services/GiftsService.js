import { api } from "./AxiosService.js"

class GiftsService {

  async getGifts() {
    const response = await api.get(/api/gifts)
    console.log('Received Gifts!', response.data);


  }
}


}

export const giftsService = new GiftsService()