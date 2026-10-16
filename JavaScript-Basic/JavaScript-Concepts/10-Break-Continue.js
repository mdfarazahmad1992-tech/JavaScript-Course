
// JavaScript Basic - Break and Continue

// 1. BREAK: Loop ko rokna
console.log("BREAK Example:");

for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        break;
    }

    console.log(i);
}

// 2. CONTINUE: Ek number skip karna
console.log("CONTINUE Example:");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}