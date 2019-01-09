import React, { Component } from 'react';
import { Segment, Step, Icon, Header, Button, Grid, Container, Divider } from 'semantic-ui-react';
import TopHeader from './Header';
import Footer from './Footer';

class OrderSuccess extends Component {
    render() {
        const { values: { email } } = this.props;
        return (
            <div>
                <TopHeader />
                <Grid>
                    <Grid.Column>
                        <div>
                            <Container textAlign='center'>
                                <Step.Group widths={3}>
                                    <Step completed>
                                        <Icon name='truck' />
                                        <Step.Content>
                                            <Step.Title>Shipping</Step.Title>
                                            <Step.Description>Choose your shipping options</Step.Description>
                                        </Step.Content>
                                    </Step>

                                    <Step completed>
                                        <Icon name='payment' />
                                        <Step.Content>
                                            <Step.Title>Billing</Step.Title>
                                            <Step.Description>Enter billing information</Step.Description>
                                        </Step.Content>
                                    </Step>

                                    <Step completed>
                                        <Icon name='info' />
                                        <Step.Content>
                                            <Step.Title>Confirm Order</Step.Title>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>

                            </Container>
                            <Container />
                        </div>
                        <Container textAlign='center'>
                            <Segment placeholder>
                                <Header icon>
                                    <Icon name='mail' />
                                    <h1 className="ui centered">A mail wil be sent to your email address</h1>
                                    <h1 className="ui centered"><a href='mailto:{email}}'>{email}</a></h1>
                                </Header>
                            </Segment>
                        </Container>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Footer />
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