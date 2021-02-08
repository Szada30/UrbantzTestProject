Feature: Factorial Calculator
  In order to calculate some factorials
  As a user
  I want to use The greatest factorial calculator!

  Scenario Outline: Calculate factorials
    Given I am on the Factorial Calculator page
    When I calculate the factorial of <number>
    Then the result I see is <result>

    Examples:
        | number | result  |
        | 0      | 1       | 
        | 1      | 1       |
        | 10     | 3628800 |
