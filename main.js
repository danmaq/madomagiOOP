'use strict';

/**
 * HTMLに文字を表示するすげーやつ
 * @param {string} str 表示したい文字列。
 */
const put = str => $('#list').append(`<li>${str}</li>`);

/** Mami ができること一覧。 */
class Mami {
    die() {
        put('Mami は死んだ');
    }
    hunt(majo) {
        put('ティロフィナーレ(笑)');
        majo.die();
    }
}

/** HomuHomu ができること一覧。 */
class HomuHomu {
    die() {
        put('HomuHomu は死んだ');
    }
    hunt(majo) {
        put('時よ！(メガネクイッ)');
        majo.die();
    }
}

/** Blossom ができること一覧。 */
class Blossom {
    die() {
        put('Blossom は死んだ');
    }
    hunt(majo) {
        put('おしりパンチ！');
        majo.die();
    }
}

/** Sayaka ができること一覧。 */
class Sayaka {
    die() {
        put('Sayaka は死んだ');
    }
    hunt(majo) {
        put('瀟洒なソード投げ攻撃');
        majo.die();
    }
}

/** Madoka ができること一覧。 */
class Madoka {
    die() {
        put('Madoka は死んだ');
    }
    hunt(majo) {
        put('かみのちから とくと めに やきつけておけ！！');
        majo.die();
    }
}

/** 魔女ができること一覧。 */
class Majo {
    attack(syojo) {
        put('うーがおー！たべちゃうぞー！');
        syojo.die();
    }
    die() {
        put('魔女は死んだ');
    }
}

/** 準備ができたらここからはじまるよ */
$(() => {
    put('神は世界を創った');
    const mami = new Mami();
    const homu = new HomuHomu();
    const blossom = new Blossom();
    const majo = new Majo();
    mami.hunt(majo);
    homu.hunt(majo);
    blossom.hunt(majo);
    const sayaka = new Sayaka();
    const madoka = new Madoka();
    sayaka.hunt(majo);
    madoka.hunt(majo);
    majo.attack(mami);
});