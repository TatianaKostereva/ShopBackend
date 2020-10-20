class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DependencyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DependencyError';
  }
}

class RequiredError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequiredError';
  }
}

module.exports = {
    dependency: DependencyError,
    validation: ValidationError,
    requirement: RequiredError,
};