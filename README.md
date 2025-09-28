[![GitHub Tag Major](https://img.shields.io/github/v/tag/smashedr/ts-test-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/ts-test-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/smashedr/ts-test-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/ts-test-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/smashedr/ts-test-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/ts-test-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/smashedr/ts-test-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/smashedr/ts-test-action/blob/master/src)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/smashedr/ts-test-action/release.yaml?logo=cachet&label=release)](https://github.com/smashedr/ts-test-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/smashedr/ts-test-action/test.yaml?logo=cachet&label=test)](https://github.com/smashedr/ts-test-action/actions/workflows/test.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/smashedr/ts-test-action/lint.yaml?logo=cachet&label=lint)](https://github.com/smashedr/ts-test-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=smashedr_ts-test-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=smashedr_ts-test-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/smashedr/ts-test-action?logo=github&label=updated)](https://github.com/smashedr/ts-test-action/pulse)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/shaner/ts-test-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/shaner/ts-test-action)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/smashedr/ts-test-action?logo=github)](https://github.com/smashedr/ts-test-action/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/smashedr/ts-test-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/smashedr/ts-test-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/smashedr/ts-test-action?logo=htmx)](https://github.com/smashedr/ts-test-action)
[![GitHub Forks](https://img.shields.io/github/forks/smashedr/ts-test-action?style=flat&logo=github)](https://github.com/smashedr/ts-test-action/forks)
[![GitHub Discussions](https://img.shields.io/github/discussions/smashedr/ts-test-action?logo=github)](https://github.com/smashedr/ts-test-action/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/smashedr/ts-test-action?style=flat&logo=github)](https://github.com/smashedr/ts-test-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# TypeScript Test Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)
- [Development](#Development)

TypeScript Test Action Template.

- JavaScript: https://github.com/smashedr/js-test-action
- TypeScript: https://github.com/smashedr/ts-test-action
- Docker: https://github.com/smashedr/docker-test-action
- Python: https://github.com/smashedr/py-test-action

## Inputs

| Input        | Req. | Default | Input&nbsp;Description |
| :----------- | :--: | :------ | :--------------------- |
| milliseconds |  -   | 1000    | Milliseconds to wait   |

```yaml
- name: 'TS Test Action'
  uses: smashedr/ts-test-action@master
  with:
    milliseconds: 2000
```

## Outputs

| Output | Description    |
| :----- | :------------- |
| time   | Resulting Time |

```yaml
- name: 'TS Test Action'
  id: test
  uses: smashedr/ts-test-action@master
  with:
    milliseconds: 2000

- name: 'Echo Output'
  run: |
    echo '${{ steps.test.outputs.time }}'
```

## Tags

The following rolling [tags](https://github.com/smashedr/ts-test-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                                   | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/smashedr/ts-test-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/smashedr/ts-test-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/smashedr/ts-test-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/smashedr/ts-test-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/smashedr/ts-test-action?style=for-the-badge&label=%20&color=red)](https://github.com/smashedr/ts-test-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/smashedr/ts-test-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/smashedr/ts-test-action/discussions/categories/q-a
- Request a Feature: https://github.com/smashedr/ts-test-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/smashedr/ts-test-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Update%20Release%20Notes)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

Currently, the best way to contribute to this project is to star this project on GitHub.

For more information, see the CSSNR [CONTRIBUTING.md](https://github.com/cssnr/.github/blob/master/.github/CONTRIBUTING.md#contributing).

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [js-test-action](https://github.com/smashedr/js-test-action?tab=readme-ov-file#readme) - JavaScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Python
- [ts-test-action](https://github.com/smashedr/ts-test-action?tab=readme-ov-file#readme) - TypeScript
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)

# Development

Development instructions have been moved to the local [CONTRIBUTING.md](#contributing-ov-file).
