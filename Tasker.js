// color
var chalk = require("chalk");
// font
var figlet = require("figlet");
var readline = require("readline");
var log = console.log;
var reader = readline.createInterface({
    input: process.stdin, // input from command line
    output: process.stdout,// output to command line
    prompt: ">"
});
console.clear();
log(chalk.blue(figlet.textSync("Tasker")));
log(chalk.blue("Type a command (Type help to see the list of commands)"));
reader.prompt();
var tasks = [];
reader.on("line", function(data){
    var cmd = data.split(" ")[0];
    var tarr = data.split(" ");
    tarr.shift();
    if(cmd == "help"){
    console.log("Available commands: ");
    console.log("1. add task_name");
    console.log("2. ls( to list all tasks) ");
    console.log("3. delete id (enter task id to delete it)");
    }else if (cmd == "add" && tarr.length > 0){
        tasks.push(tarr.join(" "));
        log(chalk.green(tasks[0] + " added"));

    }else if (cmd == "ls"){
        if (tasks.length == 0){
            log(chalk.blue("No task added"));
            return;
        }
        log(chalk.magenta("Tasks"));
        for(var i =0; i< tasks.length; i++){
            log(chalk.green(`${i + 1}. ${tasks[i]}`));
        }
    } else if (cmd == "delete"&&tarr.length > 0) {
        var pos = Number.parseInt(tarr[0]);
        log(chalk.green(`deleted ${tasks[pos-1]}`));
        var myarr = [];
        for (var i = 0; i< tasks.length; i++){
            if (pos - 1 != i){
                myarr.push(tasks[i]);
            }
        }
        tasks = myarr;
    }else{
        log(chalk.red("Wrong command"));
    }
    reader.prompt();
});
reader.on("close", function () {
    console.log("Thank You for using Our CLI");
});