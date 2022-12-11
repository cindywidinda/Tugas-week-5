@FeatureA
Feature: Heroku app Login Scenario

#nomer 2
  @AddToCart
  Scenario: Add item to cart
    Given I am on the front page
    When I try to login with username "cindywidinda" and password "cindyoung!"
    Then I am successfully logged in with username "cindywidinda"
    When I add these items to cart:
      | itemName          | quantity |
      | Samsung galaxy s6 |        1 |
      | Nokia lumia 1520  |        1 |

#nomer 1
  @Logout
  Scenario: Logout after test login
    Given I am on the front page
    When I try to login with username "cindywidinda" and password "cindyoung!"
    Then I am successfully logged in with username "cindywidinda"
    Then I am logout from website

