export const truncateInformation = (information: any) => {
  const tableMaxharacters = 20

  if (information.length <= tableMaxharacters) {
    return information
  }
  return information.slice(0, tableMaxharacters) + ' ...'
}
