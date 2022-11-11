module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest-config/file-mock.js',
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
