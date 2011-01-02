require 'rubygems'
require 'cucumber'
require 'cucumber/rake/task'

CONFIG = File.open('config/database.yml') { |yf| YAML::load yf  }

task :default => ['test:deploy', 'test:features']

namespace :development do

  task :deploy do
    c = CONFIG["development"]
    sh "couchapp push http://#{c['admin']}:#{c['password']}@#{c['host']}:#{c['port']}/#{c['database']}"
  end

end

namespace :test do

  task :deploy do
    c = CONFIG["test"]
    sh "couchapp push http://#{c['admin']}:#{c['password']}@#{c['host']}:#{c['port']}/#{c['database']}"
  end

  Cucumber::Rake::Task.new(:features) do |t|
    t.cucumber_opts = "--format pretty"
  end

  task :clean do
    c = CONFIG["test"]
    sh "curl -X DELETE http://#{c['admin']}:#{c['password']}@#{c['host']}:#{c['port']}/#{c['database']}"
  end

end
