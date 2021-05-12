Feature: homeFeature
  This feature deals with Home page related tests

  Scenario: 1 Sign up
    Given I Navigate to the Home Page
    And I wish to sign up
    When I click on Sign up button
    Then I am redirected to the register page

  Scenario: 2 Login
    Given I Navigate to the Home Page
    When I click on the Login button
    Then I am redirected to the Login page
