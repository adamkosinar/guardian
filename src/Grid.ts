import {injectable} from "tsyringe";

@injectable()
export class Grid {

    private size = 10;
    private grid = [];

    constructor() {

        for (let x = 0; x < this.size; x++) {

           this.grid.push([]);

           for (let y = 0; y < this.size; y++) {

               this.grid[x].push(null);

           }

        }

    }

    public getGrid() {
        return this.grid;
    }
}
