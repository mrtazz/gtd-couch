# debug steps
Given /^show me the page$/ do
  save_and_open_page
end

# customs steps
Given /^I am on the index page$/ do
  visit('/')
end

Given /^I fill in "([^"]*)" with "([^"]*)"$/ do |field, text|
  fill_in field, :with => text
end

Given /^a user "([^"]*)" with password "([^"]*)" exists$/ do |user, password|
  unless user.nil? or user.empty? or password.nil? or password.empty?
    visit "/"
    click_link "Signup"
    fill_in "name", :with => user
    fill_in "password", :with => password
    click_button "Signup"
    click_link "Logout?"
  end
end

Given /^I am on the Inbox page$/ do
  click_link "inboxlink"
end

Given /^I am on the Today page$/ do
  click_link "todaylink"
end

Given /^I am on the project page for "([^"]*)"$/ do |project|
  click_link project
end

Given /^I am on the context page for "([^"]*)"$/ do |context|
  click_link context
end

Given /^I have a task "([^"]*)"$/ do |title|
  click_link "inboxlink"
  click_link "menunewtask"
  fill_in "tasktitle", :with => title
  within 'form#newtask' do
    click_button "Save"
  end
  click_link "menunewtask"
end

Given /^I have a project "([^"]*)"$/ do |title|
  click_link "inboxlink"
  click_link "menunewproject"
  fill_in "projecttitle", :with => title
  within 'form#newproject' do
    click_button "Save"
  end
  click_link "menunewproject"
end

Given /^I have a context "([^"]*)"$/ do |title|
  click_link "inboxlink"
  click_link "menunewcontext"
  fill_in "contexttitle", :with => title
  within 'form#newcontext' do
    click_button "Save"
  end
  click_link "menunewcontext"
end


When /^I click "([^"]*)"$/ do |button_text|
  click_button button_text
end

When /^(?:|I )follow "([^"]*)"(?: within "([^"]*)")?$/ do |link, selector|
  with_scope(selector) do
    click_link(link)
  end
end

When /^I am logged in as "([^"]*)" with password "([^"]*)"$/ do |user, password|
  unless user.nil? or user.empty? or password.nil? or password.empty?
    visit "/"
    click_link "Login"
    fill_in "name", :with => user
    fill_in "password", :with => password
    click_button "Login"
  end
end

When /^I select "([^"]*)" in the "([^"]*)" dropdown$/ do |option, box|
  select(option, :from => box)
end

When /^I fill in "([^"]*)" with today's date$/ do |field|
  unless field.nil? or field.empty?
    d = Date.today
    fill_in field, :with => "#{d.month}/#{d.day}/#{d.year}"
  end
end

When /^I check "([^"]*)"$/ do |box|
  check box
end

When /^I click on "([^"]*)"$/ do |link|
  thefield = all("span.title").detect { |l| l.has_content?(link) }
  unless thefield.nil?
    thefield.click
  end
end

When /^I click "([^"]*)" within the new task form$/ do |link|
  within "form#newtask" do
    click_link_or_button link
  end
end

When /^I fill in "([^"]*)" with "([^"]*)" in the edit task form$/ do |field, val|
  within "form.edittaskform" do
    fill_in field, :with => val
  end
end

When /^I click the trash symbol$/ do
  find("a.deletebutton").find("img").click
end

Then /^I should see "([^"]*)"$/ do |text|
  page.has_content? text
end

Then /^I should see "([^"]*)" in the tasks field$/ do |text|
  within "div#tasks" do
    page.should have_content text
  end
end

Then /^I should not see "([^"]*)" in the tasks field$/ do |text|
  within "div#tasks" do
    page.should_not have_content text
  end
end
