Feature: Task Management
  In order to get my stuff in order
  As a user
  I want to enter, manage and complete tasks

  @javascript @withuser
  Scenario: Add task
    Given I am logged in as "User" with password "secret"
    And I am on the Inbox page
    When I follow "+ Task"
    And I fill in "title" with "Testtask"
    And I fill in "tags" with "foo,bar,bla"
    And I click "Save"
    Then I should see "Testtask" in the tasks field
    And I should see "foo" in the tasks field
    And I should see "bar" in the tasks field
    And I should see "bla" in the tasks field


  @javascript @withuser
  Scenario: Add task which is due today
    Given I am logged in as "User" with password "secret"
    And I am on the Today page
    When I follow "menunewtask"
    And I fill in "title" with "Testtask"
    And I fill in "duedate" with today's date
    And I click "Save"
    Then I should see "Testtask" in the tasks field

  @javascript @withuser
  Scenario: Add task for project
    Given I am logged in as "User" with password "secret"
    And I have a project "test project"
    And I am on the project page for "test project"
    When I follow "menunewtask"
    And I fill in "title" with "Testtask"
    And I select "test project" in the "project" dropdown
    And I click "Save" within the new task form
    Then I should see "Testtask" in the tasks field

  @javascript @withuser
  Scenario: Add task with context
    Given I am logged in as "User" with password "secret"
    And I have a context "test context"
    And I am on the context page for "test context"
    When I follow "menunewtask"
    And I fill in "title" with "Testtask"
    And I select "test context" in the "context" dropdown
    And I click "Save"
    Then I should see "Testtask" in the tasks field

  @javascript @withuser @testnow
  Scenario: Delete task
    Given I am logged in as "User" with password "secret"
    And I have a task "Testtask"
    And I am on the Inbox page
    When I click on "Testtask"
    And I click the trash symbol
    Then I should not see "Testtask" in the tasks field

  @javascript @withuser
  Scenario: Update task
    Given I am logged in as "User" with password "secret"
    And I have a task "Testtask"
    And I am on the Inbox page
    When I click on "Testtask"
    And I fill in "title" with "Testtask updated" in the edit task form
    Then I should see "Testtask updated" in the tasks field

  @javascript @withuser
  Scenario: Mark task as completed
    Given I am logged in as "User" with password "secret"
    And I have a task "Testtask"
    And I am on the Inbox page
    When I check "checkbox"
    Then I should not see "Testtask" in the tasks field

  @javascript @withuser
  Scenario: Completed task appears in the completed section
    Given I am logged in as "User" with password "secret"
    And I have a task "Testtask"
    And I am on the Inbox page
    And I check "checkbox"
    When I follow "completedlink"
    Then I should see "Testtask" in the tasks field
