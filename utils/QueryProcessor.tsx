export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.includes("What is your name?")) {
    return "Victor Wang";
  }

  if (query.includes("What is ")) {
    const arr = query.split(" ");
    console.log(arr);
    var num1 = arr[2]
    var num2 = arr[4]
    var res = 0
    if (!isNaN(parseInt(num1))  && !isNaN(parseInt(num2))){
      res = parseInt(num1) + parseInt(num2);
      console.log(res);
    }
    return res.toString();
  }

  if (query.includes("Which of the following numbers is the largest")) {
    const arr = query.split(" ");
    console.log(arr);

    var num1_string = arr[8]
    var num2_string = (arr[9])
    var num3_string = (arr[10])

    var num1 = (num1_string.slice(0,num1_string.length -1));
    var num2 = (num2_string.slice(0,num1_string.length - 1));
    var num3 = (num3_string.slice(0,num1_string.length - 1));

    console.log(num1, num2, num3)
    var res = Math.max(parseInt(num1), parseInt(num2), parseInt(num3))
    return res.toString()
  }


  return "";
}
