
class Ant {
    constructor(pos, list) {
        this.pos = pos;
        this.list = list;
        this.heading = 3;
    }

    go() {
        // console.log(
        //     this.heading,
        //     this.pos,
        //     Grid[this.pos[0] + this.pos[1] * W]
        // );
        let h = this.getHeading(this.heading);
        this.pos[0] = (this.pos[0] + h[0] + W) % W;
        this.pos[1] = (this.pos[1] + h[1] + H) % H;
        let cur = Grid[this.pos[0] + this.pos[1] * W];
        Grid[this.pos[0] + this.pos[1] * W] = (cur + 1) % this.list.length;
        this.turn(this.list[cur]);
    }

    turn(h) {
        switch (h) {
            case 0:
                this.heading += 1;
                break;
            case 1:
                this.heading += 3;
                break;
            case 2:
                break;
            case 3:
                this.heading += 2;
                break;
        }

        this.heading += 4;
        this.heading %= 4;
    }

    getHeading(h) {
        switch (h) {
            case 0:
                return [1, 0];
            case 1:
                return [0, 1];
            case 2:
                return [-1, 0];
            case 3:
                return [0, -1];
        }
    }

    static show() {
        for (let i = 0; i < H; i++) {
            for (let j = 0; j < W; j++) {
                document.getElementById(`${j}_${i}`).style.backgroundColor = Palette[Grid[i * W + j]];
            }
        }
    }
}

const H = 100;
const W = 100;

const Grid = new Array(W * H);
for (let i = 0; i < Grid.length; i++) {
    Grid[i] = 0;
}

const showGrid = document.querySelector('#main_grid');
document.body.style.backgroundColor = '#000000';
for (let i = 0; i < H; i++) {
    let tr = document.createElement('tr');
    tr.style.margin = '0';
    for (let j = 0; j < W; j++) {
        let td = document.createElement('td');
        td.id = `${j}_${i}`;
        td.style.padding = '2px';
        td.style.margin = '0';
        td.style.border = '0 solid rgb(0,0,0)';
        td.style.backgroundColor = 'rgb(0,0,0)';
        tr.appendChild(td);
    }
    showGrid.appendChild(tr);
}

const ant = new Ant(
    [Math.floor(W / 2 - 1), Math.floor(H / 2 - 1)],
    [1, 1, 0, 0, 0, 1, 1, 0, 0]
);

const Palette = new Array(ant.list.length);
Palette[0] = 'rgb(0,0,0)';
for (let i = 1; i < Palette.length; i++) {
    Palette[i] = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
}

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 10000; j++) {
        ant.go();
    }
    Ant.show();
}
console.log('done');
Ant.show();