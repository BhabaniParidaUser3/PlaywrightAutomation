// async function test() {
//     console.log("Start");
//     console.log("Login");
//     console.log("Dashboard");
// }

// test();


async function test() {

    console.log("Opening Application");

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Application Opened");
}

test();