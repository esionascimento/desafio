export interface User {
    email: string;
    first_name: number;
    id_client: string;
    id_user: string;
    last_name: string;
    password: string;
    phone: string;
}

export interface Client {
    cnpj: number;
    fantasy_name: string;
    social_reason: string;
    cep: number;
    address: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
}

export interface RootState {
    globalStore: {
      headerCreate: string,
      keyCreate: boolean,
      index: number
    },
    clientStore:{
        cnpj: number,
        fantasy_name: string,
        social_reason: string,
        cep: number,
        address: string,
        number: string,
        complement: string,
        district: string,
        city: string,
        uf: string
    },
    userStore:{
        first_name: string,
        last_name: string,
        phone: number,
        email: string,
        password: string
    }
}
