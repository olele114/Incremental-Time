"use strict"

const { player } = require("./player")

function run() {
    while(player[is_playing]) {
        setInterval(run_time, 1000)
    }
}

function run_time() {
    while (true) {
        player[play_time].add(1)
    }
}