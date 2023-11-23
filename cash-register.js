function checkCashRegister(price, cash, cid) 
{
    console.table(cid);   

    const register = 
    {
      status: undefined,
      change: cash - price
    };

    const denominations =
    {
        ONE_HUNDRED: 100,
        TWENTY: 20,
        TEN: 10,
        FIVE: 5,
        ONE: 1,
        QUARTER: 0.25,
        DIME: 0.10,
        NICKEL: 0.05,
        PENNY: 0.01 
    }

    let bills = [...cid]; // A copy of cash in drawer array
    let change = register.change; // Variable for change due 
    
    // Total change in drawer
    let total = cid.reduce((p, c) => p + c[1], 0).toFixed(2); 
    
    if (total == change) // Change due is the exact amount left in the register
    {
        register.status = "CLOSED"; 
        register.change = cid;
        
        console.log(register);
        return register;
    }
    else if (cash > price) 
    {
        // Loop through cash in drawer from greatest to least denomination 
        for (let i = bills.length - 1; i >= 0; i--) 
        { 
            let denomination = bills[i][0]; // PENNY, QUARTER, FIVE, TEN etc.
               
            switch (denomination) {
                case "ONE HUNDRED":
                    processDenomination(denominations.ONE_HUNDRED)
                    break;
                case "TWENTY":
                    processDenomination(denominations.TWENTY)
                    break;
                case "TEN":
                    processDenomination(denominations.TEN)
                    break;
                case "FIVE":
                    processDenomination(denominations.FIVE)
                    break;
                case "ONE":
                    processDenomination(denominations.ONE)
                    break;
                case "QUARTER":
                    processDenomination(denominations.QUARTER)
                    break;
                case "DIME":
                    processDenomination(denominations.DIME)
                    break;
                case "NICKEL":
                    processDenomination(denominations.NICKEL)
                    break;
                case "PENNY":
                    processDenomination(denominations.PENNY)
                    break;
            }
            function processDenomination (denom)
            {
                /* If the total change due is < than the amount of the current
                denomination, remove the denomination from the change due 
                array */
                if (change < denom) { bills.splice(i, 1); return; }    
                /* This is how much of the current denomination we need in $ 
                and cents. We check if we actually have this much available
                in the next if block */
                let amountneeded = Math.floor(change / denom) * denom;
             
                // Amount in drawer of current denomination
                let amount = bills[i][1]; 
                
                /* If amount in drawer is <= the change due, subtract that 
                amount from change. Set change due of that denomination 
                equal to the amount in the drawer */
                if (amount <= change) { change -= amount; bills[i][1] = amount; } 
                /* If amount in drawer is > than the change due, subtract 
                just what we need. Set change due of that denomination */
                else { change -= amountneeded; bills[i][1] = amountneeded; }
                
                // Deals with floating point precision issues 
                change = Math.round(change * 100) / 100;
            }    
        }
        /* We don't have exact change or we don't have enough change in the 
        register */
        if (change > 0 || total < change) 
        {
            register.status = "INSUFFICIENT_FUNDS"; 
            register.change = [];

            console.log(register);
            return register;
        } 

        register.status = "OPEN"; 
        register.change = bills.reverse();

        console.log(register);
        return register;
    }    
    else 
    { 
        // No change due because not enough cash was given. 
        register.status = "NOT_ENOUGH_CASH"; 
        register.change = [];

        console.log(register);
        return register;
    }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])  
checkCashRegister(19.5, 27, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

