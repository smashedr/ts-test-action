import * as core from '@actions/core'
import { wait } from './wait'

/**
 * The main function for the action.
 */
;(async () => {
    try {
        const ms: string = core.getInput('milliseconds', { required: true })

        core.info(`Waiting ${ms} milliseconds...`)

        // Log the current timestamp, wait, then log the new timestamp
        core.info(new Date().toTimeString())
        await wait(parseInt(ms, 10))
        core.info(new Date().toTimeString())

        // Set outputs for other workflow steps to use
        core.setOutput('time', new Date().toTimeString())

        core.info(`\u001b[32;1mFinished Success`)
    } catch (error) {
        core.debug(error)
        core.setFailed(error.message)
    }
})()
