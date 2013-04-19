.PHONY: build docs

TOASTER=node_modules/coffee-toaster/bin/toaster
CODO=node_modules/codo/bin/codo
VERSION=`coffee build/bumper --version`



# pre/post install scripts (called by npm on each install)
preinstall:
	# git submodule update --init --recursive

postinstall:
	# TODO



# watch / release
watch:
	$(TOASTER) . -wd

release:
	$(TOASTER) . -c



test: build
	# TODO: add testing routine



# docs generation
docs.cli:
	rm -rf docs-cli
	$(CODO) cli/src -o docs-cli --title Theoricus CLI Documentation
	cd docs-cli && python -m SimpleHTTPServer 8080

docs.www:
	rm -rf docs-www
	$(CODO) www/src -o docs-www --title Theoricus Documentation
	cd docs-www && python -m SimpleHTTPServer 8080


# managing version
bump.minor:
	coffee build/bumper.coffee --minor

bump.major:
	coffee build/bumper.coffee --major

bump.patch:
	coffee build/bumper.coffee --patch


# publishing / re-publishing
publish:
	git tag $(VERSION)
	git push origin $(VERSION)
	git push origin master
	npm publish

re-publish:
	git tag -d $(VERSION)
	git tag $(VERSION)
	git push origin :$(VERSION)
	git push origin $(VERSION)
	git push origin master -f
	npm publish -f