/*

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

// SOLUTION

function palindrome(str) 
{
  let newstr, revstr = "";
  
  newstr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(newstr);

  for (let i = newstr.length - 1; i >= 0; i--) { // reverse the string
    revstr += newstr[i];
  }
  
  return (revstr === newstr);
}

palindrome("eye");
palindrome("0_0 (: /-\ :) 0-0") 
palindrome("race car")
palindrome("five|\_/|four")
palindrome("My age is 0, 0 si ega ym.")
palindrome("A man, a plan, a canal. Panama")