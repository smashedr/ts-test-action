[![Tags](https://img.shields.io/github/actions/workflow/status/smashedr/ts-test-action/tags.yaml?logo=github&logoColor=white&label=tags)](https://github.com/smashedr/ts-test-action/actions/workflows/tags.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/smashedr/ts-test-action/test.yaml?logo=github&logoColor=white&label=test)](https://github.com/smashedr/ts-test-action/actions/workflows/test.yaml)
[![GitHub Release Version](https://img.shields.io/github/v/release/smashedr/ts-test-action?logo=github)](https://github.com/smashedr/ts-test-action/releases/latest)
[![GitHub Top Language](https://img.shields.io/github/languages/top/smashedr/ts-test-action?logo=htmx&logoColor=white)](https://github.com/smashedr/ts-test-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&logoColor=white)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# TypeScript Test Action

* [Inputs](#Inputs)
* [Outputs](#Outputs)

## Inputs

| input | required | default | description              |
|-------|----------|---------|--------------------------|
| body  | Yes      | -       | Test Body Data to Output |

```yaml
  - name: "TS Test Action"
    uses: smashedr/ts-test-action@master
    with:
      body: ${{ github.event.issue.body }}
```

## Outputs

| output | description    |
|--------|----------------|
| result | Results Output |

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
