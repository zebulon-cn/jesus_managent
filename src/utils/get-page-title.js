import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Jesus backstage'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
