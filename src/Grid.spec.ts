import "reflect-metadata";
import {container} from "tsyringe";
import {Grid} from "./Grid";


describe(" Grid", () => {

    describe("when instantiated", () => {

        it("initialise proplerly", () => {

           const grid = container.resolve(Grid).getGrid();

           expect(grid[0][4]).toBe(null);

        });

    });

});
