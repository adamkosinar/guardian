import {Grid} from "./Grid";

export class Robot {

    private currentPosition = {
        x: 0,
        y: 0
    }

    constructor(private grid: Grid) {

        this.grid[9][0] = true;

    }

    private setPosition(x,y) {

        this.currentPosition.x = x;
        this.currentPosition.y = y;

        this.grid[x][y] = true;

    }

    public move(directions: string) {

        const directionsArray = directions.split(" ");

        directionsArray.forEach((dir) => {

            this.processCommand(dir);

        });

    }

    private processCommand(direction: string) {

        return this["move" + direction]();

    }


    private moveE() {

        const prev = this.currentPosition.x;
        let currentX = this.currentPosition.x;

        currentX = currentX + 1;

        if (this.grid[currentX][this.currentPosition.y] == null) {

            this.setPosition(this.currentPosition.x, this.currentPosition.y);
            this.clearPosition(prev, this.currentPosition.y);

        }

    }



    private clearPosition(x, y) {

        this.grid[x][y] = null;
    }
}
