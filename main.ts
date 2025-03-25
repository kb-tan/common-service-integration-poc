
//import { paths, components, operations } from './petstorev3.types'; //not-in-used

import * as client from './axios-client'
import { AxiosResponse } from 'axios';

const sayHello = async (): Promise<any> => {
  const config = new client.Configuration({
    apiKey: "",
    username: "",
    password: "",
    basePath: "https://petstore3.swagger.io/api/v3/"
  });
  const petApi = new client.PetApi();
  const pets:AxiosResponse<client.Pet[], any> = await petApi.findPetsByStatus([client.FindPetsByStatusStatusEnum.Available]); 
  return pets;
}

(async () => {
 const resp = await sayHello();
 console.log(resp);
})();
