import React, { Component } from 'react';

class OrderSuccess extends Component{
    render(){
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
            </div>
        )
    }
}

export default OrderSuccess;

// using System;
// using System.Net;
// using System.Net.Mail;
 
// namespace EmailSmtp
// {
//     class Program
//     {
//         public static void Factuur(string email, string Productname, string Price)
//         {
//             try
//             {
//                 // Credentials
//                 var credentials = new NetworkCredential("@gmail.com", "ww");
 
//                 // Mail message
//                 var mail = new MailMessage()
//                 {
//                     From = new MailAddress(email),
//                     Subject = Productname,
//                     Body = "You have bought " + Productname + " this is a email confirmation" +
//                     "The product price was: " + Price + "You can return it within 2 weeks"
//                 };
 
//                 mail.To.Add(new MailAddress(email));
 
//                 // Smtp client
//                 var client = new SmtpClient()
//                 {
//                     Port = 587,
//                     DeliveryMethod = SmtpDeliveryMethod.Network,
//                     UseDefaultCredentials = false,
//                     Host = "smtp.gmail.com",
//                     EnableSsl = true,
//                     Credentials = credentials
//                 };
 
//                 // Send it...        
//                 client.Send(mail);
//             }
//             catch (Exception ex)
//             {
//                 Console.WriteLine("Error in sending email: " + ex.Message);
//                 //Console.ReadKey();
//                 return;
//             }
 
//             //Console.WriteLine("["+x+"] "+"Email sccessfully sent");
//             //Console.ReadKey();
//             Factuur("timhoeneveld@hotmail.com", "Piemels", "7,5");
//         }
//     }
// }