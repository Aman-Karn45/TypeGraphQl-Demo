module.exports = {
  // ... other Jest configurations ...
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [],
  setupFilesAfterEnv:["esm"]
};
