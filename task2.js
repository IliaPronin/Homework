const config = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;
        }
    },
};

const game = {
    settings: config,
    player,

    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        // добавил счетчик ходов
        let moveCounter = 1;

        while (true) {
            this.render();
            alert('ход:' + moveCounter)
            const direction = this.getDiraction();
            if (direction === -1) return alert('bye!' + '  сделано ходов:' + moveCounter);
            this.player.move(direction);
            moveCounter++;
        }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += '0 ';
                } else {
                    map += 'X '
                }
            }

            map += '\n';
        }
        console.clear();
        console.log(map);
    },

    getDiraction() {
        const availableDiractions = [-1, 2, 4, 6, 8];

        while (true) {

            const direction = parseInt(prompt('введите число, -1 для выхода'));

            if (!availableDiractions.includes(direction)) {
                alert('некорректное значение! коректные -1 , 2, 4, 6, 8');
                continue;
            }
            return direction;
        }
    },
}

game.run();