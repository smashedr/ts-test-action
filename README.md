[![Tags](https://img.shields.io/github/actions/workflow/status/smashedr/ts-test-action/tags.yaml?logo=github&logoColor=white&label=tags)](https://github.com/smashedr/ts-test-action/actions/workflows/tags.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/smashedr/ts-test-action/test.yaml?logo=github&logoColor=white&label=test)](https://github.com/smashedr/ts-test-action/actions/workflows/test.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=smashedr_ts-test-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=smashedr_ts-test-action)
[![GitHub Release Version](https://img.shields.io/github/v/release/smashedr/ts-test-action?logo=github)](https://github.com/smashedr/ts-test-action/releases/latest)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/smashedr/ts-test-action?logo=github&logoColor=white&label=updated)](https://github.com/smashedr/ts-test-action/graphs/commit-activity)
[![GitHub Top Language](https://img.shields.io/github/languages/top/smashedr/ts-test-action?logo=htmx&logoColor=white)](https://github.com/smashedr/ts-test-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&logoColor=white)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# TypeScript Test Action

* [Inputs](#Inputs)
* [Outputs](#Outputs)
* [Development](#Development)

## Inputs

| input        | required | default | description          |
|--------------|----------|---------|----------------------|
| milliseconds | No       | 1000    | Milliseconds to wait |

```yaml
  - name: "TS Test Action"
    uses: smashedr/ts-test-action@master
    with:
      milliseconds: 2000
```

## Outputs

| output | description    |
|--------|----------------|
| time   | Resulting Time |

```yaml
  - name: "TS Test Action"
    id: test
    uses: smashedr/ts-test-action@master
    with:
      milliseconds: 2000

  - name: "Echo Output"
    run: |
      echo '${{ steps.test.outputs.time }}'
```

# Development

1. Install `act`: https://nektosact.com/installation/index.html
2. Run `npm run build:watch`
3. In another terminal, run `act -j test`

For advanced using with things like secrets, variables and context see: https://nektosact.com/usage/index.html

You should also review the options from `act --help`

Note, the `.env`, `.secrets` and `.vars` files are automatically sourced with no extra options.
To source `event.json` you need to run act with `act -e event.json`
