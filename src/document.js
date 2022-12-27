class _Document {
  constructor(title) {
    this.title = title
    window["app_title"] = this.title;
  }

  setDocumentTitle(title) {
    document.title = title;
  }
}

export { _Document }
