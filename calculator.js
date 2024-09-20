
// Variables used to store information
let data = [];
let minRes = Number.MAX_VALUE;
let maxRes = -Number.MAX_VALUE;
let totalRes = 0;
let numRes = 0;

// Continuous while for the calculator 

while (true) { 
    let x = prompt("X");
    if (x === null) break;

    let operator = prompt("Operator");
    if (operator === null) break;

    let y = prompt("Y");
    if (y === null) break;


    if (isNaN(x) || isNaN(y)) { 
        data.push([x, operator, y, "Wrong input number"]);
    }
//Calculator Operands
    else { 
        x = Number(x);
        y = Number(y);
        let res;
        switch (operator) {

            case '*':
                res = x * y;
                break;
            case '+':
                res = x + y;
                break;
            case '-':
                res = x - y;
                break;
            
            case '/':
                if (y !== 0) {
                    res = x / y;
                } else {
                    res = "Computation error";
                }
                break;
            case '%':
                res = x % y;
                break;
            default:
                res = "Computation error";
        }
        if (typeof res === "number") {
            totalRes += res;
            numRes++;
            minRes = Math.min(minRes, res);
            maxRes = Math.max(maxRes, res);
        }
        data.push([x, operator, y, res]);
    }
    let proceed = confirm("Continue?");
    if (!proceed) break;

}
// Shows the first table that was displayed in the document 
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
for (let row of data) {
    document.write("<tr>");
    for (let cell of row) {
        document.write("<td>" + cell + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

// Displays the table that was directed in the docuent. 
if (numRes > 0) {
    let avgResult = totalRes / numRes;
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Avg</th><th>Total</th></tr>");
    document.write("<tr><td>" + minRes + "</td><td>" + maxRes + "</td><td>" + avgResult + "</td><td>" + totalRes + "</td></tr>");
    document.write("</table>");
}