/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps,
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location)

  if (
    prevRouterProps &&
    prevRouterProps.location.pathname.includes('/eiendommer/') &&
    location.pathname.includes('/eiendommer/')
  ) {
    window.scrollTo(...(currentPosition || [0, 0]))
  } else {
    return true
  }

  return false
}
