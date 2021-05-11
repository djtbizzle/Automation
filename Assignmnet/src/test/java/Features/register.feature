Feature: registerFeature
  This feature deals with user registration

  Scenario: 1- Register a new user with email
    Given I navigate to the sign up page
    When I enter name as "Tims1"
    And I click on use email
    And I enter email as  "djtbizzle@gmail.com"
    And I select month as "2"
    And I select day as "3"
    And I select year as "5"
    And I click on button Next

