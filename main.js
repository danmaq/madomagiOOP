'use strict';

/**
 * HTMLに文字を表示するすげーやつ
 * @param {string} str 表示したい文字列。
 */
const put = str => $('#list').append(`<li>${str}</li>`);

/** 魔法少女ができること一覧。 */
class Syojo {
    hunt(majo) {
        put('魔法少女は魔女を狩った');
    }
}

/** 魔女ができること一覧。 */
class Majo {}

/** 準備ができたらここからはじまるよ */
$(() => {
    put('神は世界を創った');
    const syojo = new Syojo();
    const majo = new Majo();
    syojo.hunt(majo);
});