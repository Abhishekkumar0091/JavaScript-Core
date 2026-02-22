let choice;

do {
    console.log("1. Check Even");
    console.log("2. Check Odd");
    console.log("0. Exit");

    choice = 1;

    switch (choice) {
        case 1:
            console.log(10 % 2 === 0 ? "Even" : "Odd");
            break;
        case 2:
            console.log(7 % 2 !== 0 ? "Odd" : "Even");
            break;
        case 0:
            console.log("Exit");
            break;
    }
} while (choice !== 0);