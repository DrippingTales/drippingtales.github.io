# Dripping Tales website

Here is the source of Dripping Tales website.

## Development

This project pins its development toolchain with [mise](https://mise.jdx.dev/).

```sh
mise install
mise exec -- npm ci
```

Run project commands through mise to use the pinned Node.js and npm versions:

```sh
mise exec -- npm run dev
mise exec -- npm run check
mise exec -- npm run build
```

Mise also provides the project checks as tasks:

```sh
mise run lint
mise run check
mise run build
```

The local pre-commit hook runs `mise run pre-commit`, which runs the lint and
check tasks. Install or refresh it after cloning with:

```sh
mise generate git-pre-commit --write --task=pre-commit
```

## License

The content of this website is under the copyright of Dripping Tales Records.
