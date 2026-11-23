@auth
Feature: User authentication

    @smoke
    Scenario: User signs in with valid information
        Given the user is on the login page
        When the user signs in with valid credentials
        Then the user menu should be displayed

    Scenario: User signs up
        Given the user is on the login page
        When the user opens the registration form
        And the user registers a new account
        Then the user should leave the registration page

    Scenario: User signs out
        Given the user is signed in
        When the user signs out from the account menu
        Then the header should show "Sign in" instead of the username