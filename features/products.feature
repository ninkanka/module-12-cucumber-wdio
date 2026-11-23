@products
Feature: Actions with products

    @smoke
    Scenario Outline: User searches for an exact product
        Given the user is on the home page
        When the user searches for "<product>"
        Then the search results should be narrowed to products matching "<product>"

        Examples:
            | product           |
            | Combination Pliers |
            | Bolt Cutters       |
            | Hammer             |
            | Claw Hammer        |
            | Thor Hammer        |

    Scenario: User reads product details page
        Given the user is on the home page
        When the user clicks on a product card
        Then the product main details should be displayed
        And the action buttons "Add to cart", "Add to favourites", and "Compare" should be available

    @filters
    Scenario: User filters and sorts products
        Given the user is on the home page
        When the user selects filter "Power Tools" from filter sidebar
        And the user sorts "Price (Low - High)" products using the drop-down menu
        Then products should be displayed according to the selected filter and sorting option

    @filters
    Scenario Outline: User filters products by category and brand
        Given the user is on the home page
        When the user selects filter "<category>" from filter sidebar
        And the user selects filter "<brand>" from filter sidebar
        Then all products should belong to the brand "<brand>"

        Examples:
            | category    | brand                |
            | Hand Tools  | ForgeFlex Tools      |
            | Power Tools | MightyCraft Hardware |