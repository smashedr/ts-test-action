import * as core from '@actions/core'
import * as github from '@actions/github'

import { wait } from './wait'

;(async () => {
    try {
        // console.log('github.context:', github.context)
        // console.log('process.env:', process.env)

        const ms: string = core.getInput('milliseconds', { required: true })
        core.info(`ms: ${ms}`)

        // Example GitHub Context
        const { owner, repo } = github.context.repo
        console.log('owner:', owner)
        console.log('repo:', repo)

        // Log the current timestamp, wait, then log the new timestamp
        core.info(new Date().toTimeString())
        const result: string = await wait(parseInt(ms, 10))
        console.log('result:', result)

        // Set outputs for other workflow steps to use
        core.setOutput('time', result)

        core.info(`\u001b[32;1mFinished Success`)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
