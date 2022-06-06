module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],

  moduleNameMapper: {
    "^@Assets/(.+)$": "<rootDir>/src/assets/$1",
    "^@Components/(.+)$": "<rootDir>/src/components/$1",
    "^@Containers/(.+)$": "<rootDir>/src/containers/$1",
    "^@Pages/(.+)$": "<rootDir>/src/pages/$1",
    "^@Layouts/(.+)$": "<rootDir>/src/layouts/$1",
    "^@Routes/(.+)$": "<rootDir>/src/routes/$1",
    "^@Hooks/(.+)$": "<rootDir>/src/hooks/$1",
    "^@Styles/(.+)$": "<rootDir>/src/styles/$1",
    "^@Utils/(.+)$": "<rootDir>/src/utils/$1",
    "^@Types/(.+)$": "<rootDir>/src/types/$1",
    "^@Services/(.+)$": "<rootDir>/src/services/$1",
    "^@Context/(.+)$": "<rootDir>/src/context/$1",
  },
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
