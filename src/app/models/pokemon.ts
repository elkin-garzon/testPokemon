export class Pokemon {
    public id?: number;
    public name: string;
    public image: string;
    public attack: number;
    public defense: number;
    public hp: number;
    public type: string;
    public idAuthor: number;

    public status?: string;

    constructor() {
        this.idAuthor = 1;
        this.hp = 0;
        this.type = '';
        this.attack = 0;
        this.defense = 0;
    }

    static clone(data: Pokemon) {
        delete data.status;
        return data;
    }
}
