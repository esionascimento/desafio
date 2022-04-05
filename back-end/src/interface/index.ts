export type GameRequest = {
    id_client: number;
    first_name: string;
    last_name:string;
    phone: number;
    email: string;
    password: string;
};

export type ClientInterface = {
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