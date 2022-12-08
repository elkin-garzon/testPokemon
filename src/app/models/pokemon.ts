export class Pokemon {
    public id?: number;
    public name: string;
    public image: string;
    public attack: number;
    public defense: number;

    public status?: string;

    static clone(data: Pokemon) {
        delete data.status;
        return data;
    }
}
