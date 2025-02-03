function tryCatch() {
  try {
    let lolos = true; // command this to test catch error
    if (lolos) {
      console.log("Congratulation");
    } else {
      console.log("Try Again Next Year");
    }
  } catch (error) {
    console.log("Something Error!");
    console.log(error.name);
    console.log(error.message);
    console.log(error);
  } finally {
    console.log("This will run with every condition (error or not)");
  }
}

tryCatch();
