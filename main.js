'use strict';

/**
 * HTMLに文字を表示するすげーやつ
 * @param {string} str 表示したい文字列。
 */
const put = str => $('#list').append(`<li>${str}</li>`);

/** 魔法少女ができること一覧。 */
class Syojo {
    constructor(name) {
        this.name = name;
    }
    hunt(majo) {
        put('ガッシ！ボカッ！');
        majo.die();
    }
}

/** 魔女ができること一覧。 */
class Majo {
    die() {
        put('魔女は死んだ');
    }
}

/** 準備ができたらここからはじまるよ */
$(() => {
    put('神は世界を創った');
    const mami = new Syojo('Mami');
    const homu = new Syojo('HomuHomu');
    const blossom = new Syojo('Blossom');
    const majo = new Majo();
    mami.hunt(majo);
    homu.hunt(majo);
    blossom.hunt(majo);
});