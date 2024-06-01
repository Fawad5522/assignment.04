var customer = +prompt("Enter Your Amount of shopping for Discount !!")

if(customer >=1000 && customer <=5000 )
    {
        alert("You Got Only 10% Discount")
    }

    else if(customer >=5000 && customer <=10000 )
        {
            alert("You Got 30% Discount")
        }

       
    else if(customer >=10000 && customer <=15000 )
        {
            alert("You Got 50% Discount")
        } 
    
        else if(customer >=15000 && customer <=20000 )
            {
                alert(" Congratulation ! You Got a 70% Discount")
            }
            else
        {
            alert("Our Discount is not for more than 20k")
        }