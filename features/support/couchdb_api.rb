require 'net/http'
require 'yajl'
require 'guid'

module CouchDBApi

  class Server
    def initialize(host, port, db, options = nil)
      @host = host
      @port = port
      @db = db
      @options = options
    end

    def delete(uri)
      req = Net::HTTP::Delete.new(uri)
      request(req)
    end

    def get(uri)
      req = Net::HTTP::Get.new(uri)
      request(req)
    end

    def put(uri, json)
      req = Net::HTTP::Put.new(uri)
      req["content-type"] = "application/json"
      req.body = json
      request(req)
    end

    def post(uri, json)
      req = Net::HTTP::Post.new(uri)
      req["content-type"] = "application/json"
      req.body = json
      request(req)
    end

    def request(req)
      if !@options.nil? and @options[:user] and @options[:password]
        req.basic_auth @options[:user], @options[:password]
      end
      res = Net::HTTP.start(@host, @port) { |http|http.request(req) }
      res
    end
  end
end

