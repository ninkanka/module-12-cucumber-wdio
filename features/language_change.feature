@language
Feature: Language change

    @smoke
    Scenario Outline: User changes language on the web page
        Given the user is on the home page
        When the user selects language "<language>" from the drop-down menu
        Then the page language attribute should be "<language>"

        Examples:
            | language |
            | DE       |
            | FR       |
            | NL       |
            | TR       |