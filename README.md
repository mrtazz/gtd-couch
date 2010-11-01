# gtd-couch
couchapp for getting things done

## Motivation
All GTD todo managers are overly complex or don't do useful syncing. CouchDB is simple
and does replication so it seems like a perfect match.

## Deployment
- go to [http://www.couchone.com/get](http://www.couchone.com/get) and get a
  hosted CouchDB or follow the instructions to set up a local one
- clone this repository `git clone http://github.com/mrtazz/gtd-couch`
- install couchapp `pip install couchapp`
- deploy it to your DB `couchapp push $yourdb`

## My data in the cloud?
Since your tasks may be sensitive data, check out the
[issues](http://github.com/mrtazz/gtd-couch/issues) to see what is
not yet implemented and also read
[this](http://blog.couchone.com/post/1027100082/whats-new-in-couchdb-1-0-part-4-securityn-stuff)
for a better understanding of the CouchDB security model.

## TODO
Take a look at the [issues](http://github.com/mrtazz/gtd-couch/issues)

## Contribute
If you want to contribute:

- Fork the project.
- Make your feature addition or bug fix.
- Commit
- Send me a pull request. Bonus points for topic branches.
