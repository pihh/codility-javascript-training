/**
  The longest common subsequence (LCS) problem is the problem of finding the
  longest subsequence common to all sequences in a set of sequences
  (often just two sequences). It differs from the longest
  common substring problem: unlike substrings,
  subsequences are not required to occupy
  consecutive positions within the
  original sequences.

  The longest common subsequence problem is a classic computer science problem,
  the basis of data comparison programs such as the diff utility, and has
  applications in computational linguistics and bioinformatics. It is
  also widely used by revision control systems such as Git for
  reconciling multiple changes made to a revision-controlled
  collection of files.
*/
function LCS(s1, s2) {
    var result = [];
    for (var i=0; i<=s1.length; i++) {
        result.push([]);
        for (var j=0; j<=s2.length; j++) {
            var currValue = 0;
            if (i==0 || j==0) {
                currValue = 0;
            } else if (s1.charAt(i-1) == s2.charAt(j-1)) {
                currValue = result[i-1][j-1] + 1;
            } else {
                currValue = Math.max(result[i][j-1], result[i-1][j]);
            }
            result[i].push(currValue);
        }
    }

    var i = s1.length;
    var j = s2.length;

    var s3 = '';
    while (result[i][j] > 0) {
        if(s1.charAt(i-1) == s2.charAt(j-1) && (result[i-1][j-1] +1 == result[i][j])) {
            s3 = s1.charAt(i-1) + s3;
            i = i-1;
            j = j-1;
        } else if (result[i-1][j] > result[i][j-1])
            i = i-1;
        else
            j = j-1;
    }
    return s3;
}

LCS('alexis','reflex');
