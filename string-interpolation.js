let customer = { name: "Matt" };
let product = { name: "Halo 5: Guardians" };
let gift = { timeLimit: "4 hours", amount: 50.0 };

let message = `Dear ${customer.name},

Thank you for making a recent purchase of '${product.name}' on
Amazon.com.
We would love to get your feedback on your experience.
If you respond in the next ${gift.timeLimit}, we will give you a gift
certificate of $${gift.amount} dollars!

We look forward to hearing from you!

Best Regards,
Amazon Customer Relations`;

console.log(message);
