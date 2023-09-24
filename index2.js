//Write a program whose major task is to calculate an individual’s Net Salary 
//by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//Use KRA, NHIF, and NSSF values provided in the link below.
function netSalary(salary){

    // Calculating PAYE
    
        
        if(salary <= 24000){
             PAYE = salary * 0.1;
        } else if (salary >= 24001 && salary <= 32333){
            PAYE = salary * 0.25;
        } else if( salary >= 32334 && salary <= 500000 ){
            PAYE = salary * 0.3
        } else if( salary >= 500001 && salary <= 800000){
            PAYE = salary * 0.325
        } else {
            PAYE = salary * 0.35
        }
    
        console.log(`PAYE: ${PAYE}`);
    
        
    
    
    
    //calculating NHIF
    
        if (salary <= 5999){
             NHIF = 150;
        } else if(salary >= 6000 && salary <= 7999){
             NHIF = 300;
        } else if(salary >= 8000 && salary <= 11999){
             NHIF = 400;
        } else if (salary >= 12000 && salary <= 14999){
            NHIF = 500;
        } else if(salary >=15000 && salary <=19999){
             NHIF = 600;
        } else if( salary >= 20000 && salary <= 24999){
             NHIF = 750;
        } else if(salary >= 25000 && salary <= 29999){
             NHIF = 850;
        } else if(salary >= 30000 && salary <= 34999){
            NHIF = 900
        } else if(salary >= 35000 && salary <= 39999){
            NHIF = 950
        }
        console.log(`NHIF: ${NHIF}`);
    
    
    //calculating NSSF
    const NSSF = salary * 0.06;
    
    console.log(`NSSF: ${NSSF}`);;
    
    const net = (salary -NHIF -NSSF -PAYE);
    console.log(`NET SALARY: ${net}`);
    
    }
    netSalary(29000);