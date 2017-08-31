'use strict';

/**
 * HTMLに文字を表示するすげーやつ
 * @param {string} str 表示したい文字列。
 */
const put = str => $('#list').append(`<li>${str}</li>`);

/** 魔法少女に共通した特徴一覧。 */
class Syojo {
    die() {
        put(`${this.constructor.name} は死んだ`);
    }
    get skill() {
        return '';
    }
    hunt(majo) {
        put(this.skill);
        majo.die();
    }
}

/** Mami ができること一覧。 */
class Mami extends Syojo {
    get skill() {
        return 'ティロフィナーレ(笑)';
    }
}

/** HomuHomu ができること一覧。 */
class HomuHomu extends Syojo {
    get skill() {
        return '時よ！(メガネクイッ)';
    }
}

/** Blossom ができること一覧。 */
class Blossom extends Syojo {
    get skill() {
        return 'おしりパンチ！';
    }
}

/** Sayaka ができること一覧。 */
class Sayaka extends Syojo {
    get skill() {
        return '瀟洒なソード投げ攻撃';
    }
}

/** Madoka ができること一覧。 */
class Madoka extends Syojo {
    get skill() {
        return 'かみのちから とくと めに やきつけておけ！！';
    }
}

/** Punie ができること一覧。 */
class Punie extends Syojo {
    get skill() {
        return 'プリンセス卍固め!!!!';
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
    const allstars = [Mami, Madoka, Sayaka, Blossom, HomuHomu, Punie];
    const trio = allstars // 魔法少女全員を……
        .sort(() => Math.random() - 0.5) // ランダムに並べ替えて、
        .filter((v, i) => i < 3) // 最初の3人だけ抜き出して、
        .map(v => new v()); // この世界に産み落とす！
    const majo = new Majo();
    trio.forEach(v => v.hunt(majo)); // 三人の選ばれた少女は、魔女へ一斉攻撃を仕掛ける！
    majo.attack(trio.pop()); // 最後の魔法少女は反撃を受ける
});