//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
function gradeGenerator (grade){
    if(grade > 79){
        return "A";
    } else if(grade >= 60 && grade < 80 ){
        return "B";
    } else if(grade >= 49 && grade < 60){
        return "C";
    } else if(grade >= 40 && grade < 50){
        return "D";
    } else (grade > 40)
    return "E"
}
console.log(gradeGenerator (89))
