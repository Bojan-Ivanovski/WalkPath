"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Path {
    constructor(grid, x, y) {
        this.mainGrid = [[""]];
        this.mainGrid = grid;
        this.walkedPath = "";
        this.collectedLetters = "";
        this.x = x;
        this.y = y;
    }
    isAlpha(letterToCheck) {
        return /[A-Z]/.test(letterToCheck);
    }
    nextPath(previousChar) {
        let directions = [];
        let left = this.x > 0 &&
            (this.mainGrid[this.y][this.x - 1] === "-" || this.mainGrid[this.y][this.x - 1] === "+" || this.isAlpha(this.mainGrid[this.y][this.x - 1])) &&
            !(previousChar[0] == this.x - 1 && previousChar[1] == this.y);
        let right = this.x < (this.mainGrid[this.y].length - 1) &&
            (this.mainGrid[this.y][this.x + 1] === "-" || this.mainGrid[this.y][this.x + 1] === "+" || this.isAlpha(this.mainGrid[this.y][this.x + 1])) &&
            !(previousChar[0] == this.x + 1 && previousChar[1] == this.y);
        let up = this.y < (this.mainGrid.length - 1) &&
            (this.mainGrid[this.y + 1][this.x] === "|" || this.mainGrid[this.y + 1][this.x] === "+" || this.isAlpha(this.mainGrid[this.y + 1][this.x])) &&
            !(previousChar[0] == this.x && previousChar[1] == this.y + 1);
        let down = this.y > 0 &&
            (this.mainGrid[this.y - 1][this.x] === "|" || this.mainGrid[this.y - 1][this.x] === "+" || this.isAlpha(this.mainGrid[this.y - 1][this.x])) &&
            !(previousChar[0] == this.x && previousChar[1] == this.y - 1);
        if (left)
            directions = [-1, 0];
        if (right)
            directions = [+1, 0];
        if (up)
            directions = [0, +1];
        if (down)
            directions = [0, -1];
        return directions;
    }
    walk() {
        let previousChar = [-1, -1];
        let currentChar = this.mainGrid[this.y][this.x];
        let [directionX, directionY] = this.nextPath(previousChar);
        while (currentChar !== "s") {
            this.walkedPath += currentChar;
            if (this.isAlpha(currentChar)) {
                this.collectedLetters += currentChar;
                [directionX, directionY] = this.nextPath(previousChar);
            }
            if (currentChar === "+")
                [directionX, directionY] = this.nextPath(previousChar);
            previousChar = [this.x, this.y];
            this.x += directionX;
            this.y += directionY;
            currentChar = this.mainGrid[this.y][this.x];
        }
        this.walkedPath += "s";
    }
}
exports.default = Path;
