########################################################
# Makefile for GhostTracker
#
# useful targets:
#   make rubocop             -- source code checks
########################################################

rubocop:
	@echo "#############################################"
	@echo "# Running rubocop code analyzer"
	@echo "#############################################"
	RAILS_ENV=test bundle exec rubocop app

bundle:
	@echo "#############################################"
	@echo "# Installing bundle"
	@echo "#############################################"
	bundle

rebuild-test-db:
	@echo "#############################################"
	@echo "# Rebuilding test database"
	@echo "#############################################"
	rm -rf db/test.sqlite
	RAILS_ENV=test bundle exec rake db:setup

all: rubocop
