document.write("89. to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression."+"<br>");
function test89(x,y,z){
    if(x+y==z || x*y==z || x-y==z || x/y==z){
        return true;
    }
    return false;
}
document.write("The number's are :10,20,0.5 , Ans :"+test89(10,20,0.5)+"<br>");
document.write("The number's are :20,40,60 , Ans :"+test89(20,40,60)+"<br><br>");