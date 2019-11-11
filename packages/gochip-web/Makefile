SRV_NAME=gochip-web
REPO_EX=registry.cn-shenzhen.aliyuncs.com
NAME_SPACE=unity-labs
REPO=${REPO_EX}
TAG=$(shell date +%Y%m%d%H%M%S)
FIXTAG?=beta

NAME=${REPO}/${NAME_SPACE}/${SRV_NAME}

build:
	echo build ${NAME}:${TAG}
	docker build -t ${NAME}:${TAG} .
	docker tag ${NAME}:${TAG} ${NAME}:${FIXTAG}
	docker push ${NAME}:${TAG}
	docker push ${NAME}:${FIXTAG}
