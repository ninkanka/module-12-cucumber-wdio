@contact
Feature: Contact

    Scenario: Enter and send contact form
        Given the user is on the home page
        When the user selects "Contact" from main menu
        And the user inputs the contact details
            | field      | value                                                                                          |
            | first name | Ola                                                                                            |
            | last name  | Nowak                                                                                          |
            | email      | aaa@gmail.com                                                                                  |
            | subject    | Customer service                                                                               |
            | message    | Hello! Where is my hummer? My order number is 208 from 12.12.2025, please will contact with me |
        And the user clicks "Send" button
        Then a confirmation message should be displayed