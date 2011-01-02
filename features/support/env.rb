require 'capybara'
require 'capybara/dsl'
require 'capybara/cucumber'
require 'yaml'
require 'features/support/couchdb_helpers'

env = File.open('config/database.yml') { |yf| YAML::load yf  }["test"]

module WithinHelpers
  def with_scope(locator)
    locator ? within(*selector_for(locator)) { yield } : yield
  end
end
World(WithinHelpers)

Capybara.default_driver = :selenium
Capybara.app_host = "http://#{env['host']}:#{env['port']}/#{env['database']}/_design/couchapp/_rewrite"
Capybara.default_wait_time = 5
World(Capybara)

# change auth db before testing
Before do
  helper = CouchDBHelper.new(env["host"], env["port"], env["admin"], env["password"])
  helper.change_auth_db(env["authdb"])
end

Before "@withuser" do
  helper = CouchDBHelper.new(env["host"], env["port"], env["admin"], env["password"])
  helper.signup_user(env["authdb"], "User", "secret")
end

# cleanup CouchDB after scenarios
After do
  helper = CouchDBHelper.new(env["host"], env["port"], env["admin"], env["password"])
  helper.change_auth_db
  helper.delete_db(env["authdb"])
  helper.clear_db(env["database"])
end
