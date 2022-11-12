// SPDX-License-Identifier:MIT

pragma solidity^0.8.7;

contract BigBoss{
    struct BigBoss{
        string name;
        string imageURI;
        uint hp;
        uint maxHp;
        uint attackDamage;

    }

    BigBoss public bigBoss;

    constructor()ERC721("bigboos")
}