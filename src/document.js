class _Document {
  constructor(title) {
    this.title = title
  }

  setDocumentTitle(title, path) {
    document.title = `${title} - ${path.split("#")[1]}`
  }
}

export { _Document }
