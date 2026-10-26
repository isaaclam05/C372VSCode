const payments = [
    { petName: "Chester", amount: 50, status: "APPROVED" },
    { petName: "Mochi", amount: 80, status: "PENDING" },
    { petName: "Mira", amount: 40, status: "DECLINED" }
];

console.log("Mochi's payment status is: " + payments[1].status)

payments.forEach(payment => {
    if (payment.status === "APPROVED") {
        console.log(`Pet-care service for ${payment.petName} confirmed`);
    } else if (payment.status === "PENDING") {
        console.log(`Payment for ${payment.petName} is being processed`);
    } else {
        console.log(`Payment for ${payment.petName} unsuccessful`);
    }
});

// If-else statement
for (const payment of payments) {
    if (payment.status === "APPROVED") {
        console.log(`Pet-care service for ${payment.petName} confirmed`);
    }
    else if (payment.status === "PENDING") {
        console.log(`Payment for ${payment.petName} is being processed`);
    }
    else if (payment.status === "DECLINED") {
        console.log(`Payment for ${payment.petName} unsuccessful`);
    }
}

// Switch statement
for (const payment of payments) {
    switch (payment.status) {
        case "APPROVED":
            console.log(`Pet-care service for ${payment.petName} confirmed`);
            break;

        case "PENDING":
            console.log(`Payment for ${payment.petName} is being processed`);
            break;

        case "DECLINED":
            console.log(`Payment for ${payment.petName} unsuccessful`);
            break;

        default:
            console.log(`Unknown payment status for ${payment.petName}`);
    }
}