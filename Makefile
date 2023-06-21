.PHONY: install
install:
	pnpm install --dir src

.PHONY: dev
dev:
	cd src; pnpm dev