let totalClasses=prompt("Enter total number of classes");
let classAttended=prompt("Enter total number of classes attended");
let hasMedicalCause=prompt("Does the student have a medical cause? ");
if(hasMedicalCause === 'Y')
{
    if(classAttended/totalClasses>=0.6)
    {
        console.log("The student is allowed to sit in the exam");
        
        

        }
    else{
        console.log("the student not allowed to sit in exam");
    }
}
else
{
    if(classAttended/totalClasses >=0.75)
    {
        console.log("the student allow to sit in exam");
    }
    else{
        console.log("the student is not allowed to sit in the exam");
    }
}

