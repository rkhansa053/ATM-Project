#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 0;
let isContinue = true;
const pinCode = 2468;
const message = "Welcome to ATM";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter pin code: "
});
if (pin_ans.ans === 2468) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposit", "Withdraw", "Fast cash", "Check balance"]
        });
        // ------------------------------------------------ DEPOSIT----------------------------------------------------------------
        if (ans.list === "Deposit") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposit_amount",
                message: "Please enter your amount: "
            });
            if (ans.Deposit_amount > 0) {
                myBalance = myBalance + ans.Deposit_amount;
                console.log(myBalance);
            }
        }
        // -------------------------------------------------WITHDRAW---------------------------------------------------------------
        else if (ans.list === "Withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Withdraw_amount",
                message: "Please enter amount: "
            });
            if (ans.Withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.Withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("Not enough money");
            }
        }
        // -------------------------------------------------Fast cash-------------------------------------------------------------------
        else if (ans.list === "Fast cash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "Fast_cash",
                message: "Please select one",
                choices: ["500", "1000", "2000"]
            });
            if (ans.Fast_cash <= myBalance) {
                if (ans.Fast_cash === "500") {
                    myBalance -= ans.Fast_cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_cash === "1000") {
                    myBalance -= ans.Fast_cash;
                    console.log(myBalance);
                }
                else if (ans.Fast_cash === "2000") {
                    myBalance -= ans.Fast_cash;
                    console.log(myBalance);
                }
            }
        }
        // ---------------------------------------------CHECK BALANCE---------------------------------------------------------------
        else if (ans.list === "Check balance") {
            console.log(`Your balance is ${myBalance}`);
        }
        // ----------------------------------------while condition------------------------------------------------
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue: "
        });
        if (while_ans.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
}
else {
    console.log("Invalid pin code");
}
