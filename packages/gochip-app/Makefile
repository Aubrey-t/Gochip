
TEST_VER?=~1.0.0
TEST_DES?=$(shell date +%Y%m%d%H%M%S) test

IOS_PROD_VER?=~2.1.0
PROD_DES?=$(shell date +%Y%m%d%H%M%S) prod

Android_PROD_VER?=~2.1.0
# Android_PROD_DES?=$(shell date +%Y%m%d%H%M%S) prod

IOS_APP=ulteam/gochip_ios
ANDROID_APP=ulteam/gochip_android
# run make bundle before code push
# code-push
cp-iosTest:
	echo "code-push start: test version: ${IOS_TEST_VER}; des: ${TEST_DES}"
	code-push release ${IOS_APP} ./bundles/ios/ "${TEST_VER}" --d Staging --des "${TEST_DES}" --m false

# default -x true need patch or on code push pages and modify disable is false
cp-iosProd:
	echo "code-push start: prod version: ${IOS_PROD_VER}; des: ${PROD_DES}"
	code-push release ${IOS_APP} ./bundles/ios/ "${IOS_PROD_VER}" --d Production --des "${PROD_DES}" --m true -x true

cp-androidTest:
	echo "code-push start: test version: ${TEST_VER}; des: ${TEST_DES}"
	code-push release ${ANDROID_APP} ./bundles/android/ "${TEST_VER}" --d Staging --des "${TEST_DES}" --m false

# default -x true need patch or on code push pages and modify disable is false
cp-androidProd:
	echo "code-push start: prod version: ${Android_PROD_VER}; des: ${PROD_DES}"
	code-push release ${ANDROID_APP} ./bundles/android/ "${Android_PROD_VER}" --d Production --des "${PROD_DES}" --m true -x true 

cp-ls:
	code-push deployment ls porder_ios

bundle:
	npm run bundles

iosBundle:
	npm run bundles:ios

androidBundle:
	npm run bundles:android

iosBeta:iosBundle cp-iosTest

androidBeta: androidBundle cp-androidTest

copy-prod:
	cp ./config/.env.prod .env

beta:copy-prod iosBeta androidBeta
	cp ./config/.env.beta .env

prod:cp-iosProd cp-androidProd

copy-beta:
	cp ./config/.env.beta .env


build-android-06:
	make copy-beta
	TEST_VER="~0.6.0" make androidBeta


build-ios-06:
	make copy-beta
	TEST_VER="~0.6.0" make iosBeta

build-06:build-android-06 build-ios-06

build-android-12:
	echo "build android version ~1.2.0"
	make copy-prod
	npm start & Android_PROD_VER="~1.2.0" make androidBundle	&& make cp-androidProd
# git commit messages
log-review:
	git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr - @%an)%Creset ' --abbrev-commit --date=relative

log:
	git log  --pretty=format:'%s %Cgreen(%cr - @%an)%Creset' --abbrev-commit --date=relative

log-sheet:
	git log  --pretty=format:'%s %Cgreen@%an%Creset' --abbrev-commit --date=relative

# 1.1.0 -> 1.1.1
release-patch:
	npm version patch -m 'chore(release): %s'
	git push --tags

# 1.1.0 -> 1.2.0
release-minor:
	npm version minor -m 'chore(release): %s'

# 1.1.0 -> 2.0.0
release-major:
	npm version major -m 'chore(release): %s'

# oss
ossBeta:
	node scripts/upload-oss.js

ossProd:
	APP_TYPE=prod node scripts/upload-oss.js

start-dev:
	QWALLET_DOMAIN=http://localhost:8001 react-native start

gradle-beta:
	echo "gradle-beta"	
	npm run gradle:b && \
	make ossBeta


gradle-prod:
	echo "gradle-prod"
	make copy-prod && \
	npm run gradle:p && \
	make ossProd
	cp ./config/.env.dev .env