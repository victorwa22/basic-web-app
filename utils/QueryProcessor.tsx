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

  return "";
}
