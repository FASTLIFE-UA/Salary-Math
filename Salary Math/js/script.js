let salary = prompt('Отримані кошти');

const total = salary;
console.log(total)

const premium = salary * 0.15;
console.log(premium)

const totalsalary = Number(total) + Number(premium);
console.log(totalsalary)

const tax = totalsalary * 0.10
console.log(tax)

const shop = 190;

const take = ((Number(totalsalary) - Number(tax)) - Number(shop));
console.log(take)

alert ("Твоя виручка складає:" + take)