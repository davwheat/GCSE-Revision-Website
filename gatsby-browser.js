/* eslint-disable no-unused-vars */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onServiceWorkerUpdateReady = () => {
  // window.IsWorkerUpdateAvailable = true

  if (window.confirm("This site has got new content. Reload?"))
    window.location.reload()
}
