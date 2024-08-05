"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const readline = __importStar(require("readline"));
const path_1 = __importDefault(require("./path"));
const input = readline.createInterface({
    // @ts-ignore
    input: process.stdin,
    // @ts-ignore
    output: process.stdout
});
var grid = [];
var found = false;
var x = 0;
var y = 0;
input.on("line", (line) => {
    let listLine = line.toString().split("");
    if (!found) {
        listLine.forEach((char, index) => {
            if (char === ">") {
                x = index;
                found = true;
            }
        });
        if (!found)
            y += 1;
    }
    grid.push(listLine);
});
input.on("close", () => {
    if (found) {
        var path = new path_1.default(grid, x, y);
        path.walk();
        console.log(`Path = ${path.walkedPath}`);
        console.log(`Letters = ${path.collectedLetters}`);
    }
    else {
        console.log("No starting point '>'");
    }
});
