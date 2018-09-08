Feature: Correct display of the number of items

   As a public user, I would like to display a certain number
   of random items.

   Scenario: Determine the correct number of random items
   Given Jon wants a list of random items
   When he sets the number of items displayed to 10
   Then he should see that many random items displayed