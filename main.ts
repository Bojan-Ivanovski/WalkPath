// @ts-ignore
import * as readline from 'readline';
import Path from './path';
const input = readline.createInterface({
    // @ts-ignore
    input: process.stdin,
    // @ts-ignore
    output: process.stdout
});

var grid: string[][] = []
var found : boolean = false
var x : number = 0
var y : number = 0

input.on("line", (line : any) => {
    let listLine : string[] = line.toString().split("");
    if(!found){
        listLine.forEach((char : string, index: number) => {
            if(char === ">")
            {
                x = index                
                found = true
            }
        });
        if(!found)
            y += 1;
    }
    grid.push(listLine)
});

input.on("close", () => {
    if(found)
    {
        var path: Path = new Path(grid , x , y);
        path.walk()
        console.log(`Path = ${path.walkedPath}`)
        console.log(`Letters = ${path.collectedLetters}`)
    }else{
        console.log("No starting point '>'")
    }
})