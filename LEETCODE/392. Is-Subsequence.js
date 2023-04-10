// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input: s = "axc", t = "ahbgdc"
// Output: false
//
// Input: s = "aaaaaa", t = "bbaaaa"
// Output: false
//
// Input: s = "ab", t = "baab"
// Output: true

const isSubsequence = (s, t) => {
    if (s.length > t.length) return false;
    let newT = t;
    for (let i = 0; i < s.length; i++) {
        const currentIndex = newT.indexOf(s[i]);
        newT = newT.slice(currentIndex + 1);
        if (currentIndex === -1) {
            return false;
        }
    }
    return true;
};

console.log(isSubsequence("abc", "ahbgdc"), '==> true');
console.log(isSubsequence("axc", "ahbgdc"), '==> false');
console.log(isSubsequence("aaaaaa", "bbaaaa"), '==> false');
console.log(isSubsequence("ab", "baab"), '==> true');