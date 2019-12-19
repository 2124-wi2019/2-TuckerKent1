/*
Tucker Kent
kent_a03b.js
19WI_INFO_2124_WW
Thoendel
Created 18 December 2019
*/

const firstName = "Tucker"; //constant is declared and initialized
const lastName = "Kent"; //constant declared and initialized
const villainFirstName = "Evil"; // constant declared and initialized
const villainLastName = "McNastyman"; // constant declared and initialized
const companyName = "Hero Corp."; // constant declared and initialized
let annualSalary = 999999; // variable declared and initialized
let laughString = "\nHeh"; // variable declared and initialized
let age = 29; // variable declared and initialized
let weight = 190; // variable declared and initialized
let counterStartValue = 5; // variable declared and initialized

// variable story declared and initialized - includes story for assignment to simplify the console.log                                                           
let story = `
Good evening, ${firstName}. I'm glad to see you could join us.
According to your files, you're ${age} years old. Hehe, that means next
year you'll be ${age+1} years old and if I doubled your age, you'd be
${age*2} years old!

I found your file because your last name, '${lastName.toUpperCase()}' was all
capitalized on your folder. This is unusual because our files usually have
last names all lowercase. So I expected to see '${lastName.toLowerCase()}', which
I did not see.

Allow me to introduce myself. My name is ${villainFirstName} ${villainLastName}.

I'm the chief investigator at ${companyName}.. I've been tasked with investigating you
due to a suspected case of fraud. It appears you embezzled 10% of your annual salary. As you
know, your annual salary is ${annualSalary} and 10% of your annual salary is ${annualSalary * .1},
which is a sizeable amount for our company.

I know your password. It was simple, it's just the first, third, and fourth letters of your first name:
${firstName.charAt(0)} ${firstName.charAt(2)} ${firstName.charAt(3)}

And the pin code for your debit card was just the index value of the first, third, and fourth values of your last name:
${lastName.indexOf("K")} ${lastName.indexOf("n")} ${lastName.indexOf("t")}

Hmmm.... sometimes I ask my Google home, "Does my last name begin with 'V'", and Google responds "${lastName.startsWith("V")}"
... and then I ask Google home, "Does my last name end with'n'", and Google responds "${lastName.endsWith("n")}"

and sometimes, I ask google home if my weight is finite, and Google home responds "${Number.isFinite(weight)}", which makes me happy.
... but when I ask if my first name is finite, Google home responds, "${isFinite(firstName)}", and this makes me sad.

Anyway, I've talked too much. Now, it's time for action. Somebody set up us the bomb. All your base are belong to us.

Allow me to laugh five times:${laughString.repeat(5)}


**Background voice**
Now counting down:

${counterStartValue}
${counterStartValue -= 1}
${--counterStartValue}
${--counterStartValue}
${--counterStartValue}

Boom!`; // end of template literal

console.log(story); // printing "story" with console.log
