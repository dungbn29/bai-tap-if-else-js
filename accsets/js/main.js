// bai 1
function bai1(mark) {
    if (mark >= 85) {
        console.log("A");
    } 
    else if (70 <= mark && mark < 85) {
        console.log("B");
    }
    else if (40 <= mark && mark <70) {
        console.log("C");
    }
    else {
        console.log("D");
    }
}
bai1(10);

// bai 2
function bai2(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
bai2(5,10);

// bai 3
function bai3(n) {
    if (n > 0) {
        console.log("n la so duong");        
    } 
    else if (n < 0) {
        console.log("n la so am");        
    } 
    else {
        console.log("n la so 0");
    }
}
bai3(3);

// bai 4
function bai4(n) {
    if (n % 2 == 0) {
        console.log("n la so chan");
    } else {
        console.log("n la so le");
    }
}
bai4(4);

// bai 5
function bai5(n) {
    if (n % 3 ==0 && n % 5 == 0) {
        console.log("n đồng thời chia hết cho 3 và 5");
    } else {
        console.log("n ko đồng thời chia hết cho 3 và 5");
    }
}
bai5(15);

// bai 6
function bai6(a,b,c) {
    if (a + b == c) {
        console.log("c = a + b");
    } else {
        console.log("c != a + b");
    }
}
bai6(1,2,3);