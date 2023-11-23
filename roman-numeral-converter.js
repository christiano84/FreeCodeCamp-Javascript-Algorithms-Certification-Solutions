/* 


Convert the given number into a roman numeral.
Roman numerals 	Arabic numerals
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1

All roman numerals answers should be provided in upper-case.

*/

// SOLUTION

function convertToRoman(num) 
{
  const romanI = ['I', 'X', 'C', 'M', '_X', '_C', '_M'];
  const romanV = ['V', 'L', 'D', '_V', '_L', '_D'];
  let roman = "";
  
  let iter = 0;
  let [Ival, Vval, Xval] = ["", "", ""];

  // this is our range 
  if (num < 1 || num > 3999999) return undefined;

  /* loop over each decimal place (start at ones,
  then tens, hundreds etc) */
  for (let i = num.toString().length - 1; i >= 0; i--) { 
  
    /* a counter to see what decimal place we are
    in. our first iteration will be the ones position as we go from right 
    to left. */
    iter++; 
	
    // current roman numeral values for 1, 5 and 10 for this decimal position
    Ival = romanI[iter - 1];
    Vval = romanV[iter - 1];
    Xval = romanI[iter]; 
  
    // function called returns that decimal places roman numeral. we convert each individual number (if we need to convert 136 to a roman numeral, we convert 6 first by calling romanconv, then the 3 and finally the 1)
    roman = romanconv(num.toString()[i], Ival, Vval, romanI[iter]) + roman; 
  }

  // roman numeral rules function
  function romanconv(num, ival, vval, xval) 
  {
     num = parseInt(num); // convert back to Number
     if (num > 0 && num < 4) { return ival.repeat(num); }
     else if (num == 4) { return ival + vval; }
     else if (num == 5) { return vval; }
     else if (num > 5 && num < 9) { return vval + ival.repeat(num - 5); }
     else if (num == 9) { return ival + xval; }
     else { return ""; } // for zeros do nothing
  }

  return roman;
}

console.log(convertToRoman(921562));