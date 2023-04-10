// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan&id=level-1
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
// Input: s = "egg", t = "add"
// Output: true
// Input: s = "foo", t = "bar"
// Output: false
// Input: s = "paper", t = "title"
// Output: true

const isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let lastS = 0, lastT = 0;
    const hashS = {}, hashT = {}

    for (let i = 0; i < s.length; i++) {
        s[i] !== s[i + 1] ? lastS++ : lastS = 0;
        t[i] !== t[i + 1] ? lastT++ : lastT = 0;
        if (lastS !== lastT) return false;
        hashS[s[i]] = hashS[s[i]] + 1 || 1;
        hashT[t[i]] = hashT[t[i]] + 1 || 1;
    }

    for (let i = 0; i < Object.keys(hashS).length; i++) {
        if (Object.values(hashS)[i] !== Object.values(hashT)[i]) return false;
    }
    return true
};

console.log(isIsomorphic("egg", "add"), 'true');
console.log(isIsomorphic("foo", "bar"), 'false');
console.log(isIsomorphic("paper", "title"), 'true' );
console.log(isIsomorphic("bbbaaaba", "aaabbbba"), 'false' );
console.log(isIsomorphic("badc", "baba"), 'false' );
console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck"), 'false' );