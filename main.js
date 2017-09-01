'use strict';

/**
 * HTMLに文字を表示するすげーやつ
 * @param {string} str 表示したい文字列。
 */
const put = str => $('#list').append(`<li>${str}</li>`);

/** 魔法少女に共通した特徴一覧。 */
class Syojo {
    constructor(soul = new Soul()) {
        this.soul = soul;
        put('<strong>契約が成立し、魔法少女が誕生した</strong>');
    }
    die() {
        put(`${this.constructor.name} は死んだ`);
    }
    /** ソウルジェムを取得・設定するアクセサ。 */
    get soul() { return this._soul; }
    set soul(value) { this._soul = value; }
    hunt(majo) {
        put(this.soul.skill);
        majo.die();
    }
}

/** 空のソウルジェムができること一覧。 */
class Soul {
    constructor() {
        put('<strong>ソウルジェムが創られた</strong>');
    }
    static get singleton() {
        return this._singleton || (this._singleton = new this());
    }
    get skill() { return ''; }
}

/** Mami ができること一覧。 */
class Mami extends Soul {
    get skill() { return 'ティロフィナーレ(笑)'; }
}

/** HomuHomu ができること一覧。 */
class HomuHomu extends Soul {
    get skill() { return '時よ！(メガネクイッ)'; }
}

/** Blossom ができること一覧。 */
class Blossom extends Soul {
    get skill() { return 'おしりパンチ！'; }
}

/** Sayaka ができること一覧。 */
class Sayaka extends Soul {
    get skill() { return '瀟洒なソード投げ攻撃'; }
}

/** Madoka ができること一覧。 */
class Madoka extends Soul {
    get skill() { return 'かみのちから とくと めに やきつけておけ！！'; }
}

/** Punie ができること一覧。 */
class Punie extends Soul {
    get skill() { return 'プリンセス卍固め!!!!'; }
}

/** 魔女ができること一覧。 */
class Majo {
    constructor() {
        put('<strong>絶望は、魔女の肉体を生み出した</strong>');
    }
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
    // 3 人分の肉体を用意する
    const trio = Array.from({ length: 3 }, () => new Syojo());
    for (let i = 0; i < 10; ++i) {
        const allsouls = [Mami, Madoka, Sayaka, Blossom, HomuHomu, Punie];
        const souls = allsouls // 魔法少女のソウルジェム全員を……
            .sort(() => Math.random() - 0.5) // ランダムに並べ替えて、
            .filter((v, i) => i < trio.length) // 最初の3人だけ抜き出して、
            .map(v => v.singleton); // ソウルジェム実体を拾う！
        trio.forEach((v, i) => v.soul = souls[i]); // ソウルジェムを肉体にくっつける
        const majo = new Majo();
        trio.forEach(v => v.hunt(majo)); // 三人の選ばれた少女は、魔女へ一斉攻撃を仕掛ける！
        trio.forEach(majo.attack);
    }
});