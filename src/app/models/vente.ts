export interface Vente {
    client: string,
    ventes: Array<any>, //tableau contenant les produits achetés par le client
    total: number
}