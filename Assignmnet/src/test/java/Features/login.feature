Feature: loginFeature
  This feature deals with the login functionality of the application

  Scenario: 1- login with correct username and password
    Given I navigate to the login page
    And I enter the username as "toluchud@gmail.com" and password as "Wednesday_05G"
    When I click login button
    Then I should see the user page


  Scenario: 2- Register Via Login Page
    Given I navigate to the login page
    And I click on sign up button
    And I am redirected to Sign up page

#    Examples:
#      | UserN | PassW |
#      | user1 | pass1 |
##      | user2 | pass2 |
##      | user3 | pass3 |
##      | user4 | pass4 |